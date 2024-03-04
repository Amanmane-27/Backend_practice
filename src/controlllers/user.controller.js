import {asyncHandler} from "../utils/asyncHandler.js";
import { ApiError } from "../utils/Apierror.js";
import {User} from "..//models/user.model.js"

const registerUser = asyncHandler( async (req,res) => {
    //step 1: Get user details from frontend;
    //step 2: validation:(not empty)
    //step 3: cheak if user already exists:username , email;
    //step 4: cheak for image ; cheak for avatar;
    //step 5: upload them to cloudianry, avatar ;
    //step 6: create user object - create entery in db ;
    //step 7: remove password and refresh token field from responce
    //step 8: cheak for user creation ;
    //step 8: return res;
     
    // step 1:

    const {fullname,email,username,password} = req.body;
    console.log("fullname",fullname);
  
    // if(fullname===""){
    //     throw new ApiError(400,"fullnameis required");
    // }
 
     if ([fullname,email,username,password].some((field) => 
     field?.trim() === "")
     ) 
     {
        throw new ApiError(400,"All fields are required ");
     }

    const existedUser = User.findOne({
        $or: [{username},{email}]
    });

    if(existedUser){

        throw new ApiError(409," User with email or uaername already existed")
    };

    req.files?.avatar

    
 
 



    
} )



export {registerUser} ;