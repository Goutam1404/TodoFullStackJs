import express from "express";
import {
  getProfile,
  loginUser,
  logOutUser,
  registerUser,
  verifyUser,
} from "../controllers/user.controller.js";
import { isLoggedIn } from "../middleware/auth.middleware.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.get("/verify/:token", verifyUser);
userRouter.post("/login", loginUser);
userRouter.get("/profile", isLoggedIn, getProfile);
userRouter.get("/logout", isLoggedIn, logOutUser);
export default userRouter;
