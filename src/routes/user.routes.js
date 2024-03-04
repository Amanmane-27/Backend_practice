import {Router} from "express";
import { registerUser } from "../controlllers/user.controller.js";

const router= Router();

router.route("/register").post(registerUser)
// router.route("/login").post(login.js)


export default router;
