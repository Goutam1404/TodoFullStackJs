import jwt from "jsonwebtoken";

export const isLoggedIn = async (req, res, next) => {
  try {
    let token = req.cookies?.token;
    if (!token) {
      return res.status(401).json({
        message: "Authentication failed",
        success: false,
      });
    }
    //It return all the data that is passed with the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    //Here the data is being stored in the user
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({
      message: "Authentication failed",
      success: false,
    });
  }
};
