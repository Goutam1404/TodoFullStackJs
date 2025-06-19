import User from "../models/User.model.js";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import jwt from "jsonwebtoken"
import nodemailer from "nodemailer"
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log("Incoming request body:", req.body);

    if (!email || !name || !password) {
      return res.status(400).json({
        success: false,
        message: "Some fields are missing",
      });
    }

    const isUser = await User.findOne({ email });
    if (isUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not registered",
      });
    }

    const token = crypto.randomBytes(32).toString("hex");
    console.log(token);
    user.verificationToken = token;

    //saving the user in database
    await user.save();

    //sending an email
    // const transporter = nodemailer.createTransport({
    //   host: process.env.MAILTRAP_HOST,
    //   port: process.env.MAILTRAP_PORT,
    //   secure: false, // true for port 465, false for other ports
    //   auth: {
    //     user: process.env.MAILTRAP_USERNAME,
    //     pass: process.env.MAILTRAP_PASSWORD,
    //   },
    // });

    // const mailOption = {
    //   from: process.env.MAILTRAP_SENDER, // sender address
    //   to: createdUser.email, // list of receivers
    //   subject: "Verify your email ", // Subject line
    //   text: `Click on the link to verify ${process.env.BASE_URL}/api/v1/users/verify/${token}`,
    // };
    // await transporter.sendMail(mailOption);
    // console.log("Email sent successfully");

    return res.status(201).json({
      message: "User registered successfully",
      token,
      success: true,
    });
  } catch (error) {
    console.error("Registration error:", error); // Show real error
    return res.status(500).json({
      message: "Error in creating the profile",
      success: false,
    });
  }
};

const verifyUser = async (req, res) => {
  //get token from the url
  const { token } = req.params;
  //checking if the token was found in url or not
  if (!token) {
    return res.status(400).json({
      message: "Token not found",
      success: false,
    });
  }
  try {
    // Find user by token
    const user = await User.findOne({ verificationToken: token });

    if (!user) {
      return res.status(400).json({
        message: "Invalid or expired token",
        success: false,
      });
    }

    // Update user as verified
    user.isVerified = true;
    user.verificationToken = undefined;
    await user.save();

    return res.status(200).json({
      message: "Email verified successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Verification failed",
      success: false,
      error: error.message,
    });
  }
};

const loginUser = async (req, res) => {
  const email = req.body.email?.trim();
  const password = req.body.password;

  if (!email || !password) {
    // console.log("Checking the presence of email and password");
    
    return res.status(400).json({
      message: "All fields are required",
      success: false,
    });
  }

  try {
    const user = await User.findOne({ email });
    // console.log("Checking the presence of user");
    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password",
        success: false,
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    // console.log("Checking the password");
    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid email or password",
        success: false,
      });
    }
    // console.log("Checking user is verified or not");
    if (!user.isVerified) {
      return res.status(403).json({
        message: "User is not verified",
        success: false,
      });
    }
    // console.log("assigning token");
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });

    // console.log("final return");
    const cookieOption = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 24 * 60 * 60 * 1000,
    };

    res.cookie("token", token, cookieOption);

    return res.status(200).json({
      success: true,
      message: "Login successful",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error during login",
      success: false,
      error:error.message,
    });
  }
};


const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select(
      "-password -createdAt -updatedAt"
    );
    if (!user) {
      res.status(400).json({
        message: "User not found",
        success: false,
      });
    }
    res.status(200).json({
      message: "User found",
      user,
      success: true,
    });
  } catch (error) {
    res.status(401).json({
      message: "User not found",
      success: false,
    });
  }
};

const logOutUser = async (req, res) => {
  try {
    res.cookie("token", "", {});
    res.status(200).json({
      message: "User Logout successful",
      success: true,
    });
  } catch (error) {
    res.status(401).json({
      message: "Failed to logout the user",
      success: false,
    });
  }
};

// const forgotPassword = async (req, res) => {};
// const resetPassword = async (req, res) => {};

export { registerUser, verifyUser, loginUser, getProfile, logOutUser };
