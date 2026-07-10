import express from 'express'
import { register,login,logout } from '../controller/auth.controller.js';
import {verifyOtp,sendVerificationCode}from "../controller/verifymail.js"
import reset from "../controller/resetPassword.controller.js"
import authenticate from "../middleware/authenticate.middleware.js"

const router = express.Router();

router.post("/forgot-password",sendVerificationCode);
router.post("/verify-otp",verifyOtp);
router.post("/reset/:id", reset)

router.post("/register",register);
router.post("/login",login);
router.post("/logout",authenticate,logout);

export default router;