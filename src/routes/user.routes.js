import {Router} from "express";
import { registerUser } from "../controlllers/user.controller.js";
import {upload} from "../middleware/multer.middleware.js"
const router= Router();

router.route("/register").post(
    upload.fields([
    {
       name:'avatar',
       maxCount:1,
    },
    {
       name:"coverImage",
       maxCount:1,
    }]),
    registerUser)
// router.route("/login").post(login.js)


export default router;
