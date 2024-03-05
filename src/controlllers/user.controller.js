import {asyncHandler} from "../utils/asyncHandler.js";
import { ApiError } from "../utils/Apierror.js";
import {User} from "../models/user.model.js";
import {uploadOnCloudinar} from "../utils/cloudinary";
import { ApiResponce } from "../utils/apiResponce.js";

const registerUser = asyncHandler( async (req,res) => {
    console.log(req.body)
    //step 1: Get user details from frontend;
    //step 2: validation:(not empty)
    //step 3: cheak if user already exists:username , email;
    //step 4: cheak for image ; cheak for avatar;
    //step 5: upload them to cloudianry, avatar ;
    //step 6: create user object - create entery in db ;
    //step 7: remove password and refresh token field from responce
    //step 8: cheak for user creation ;
    //step 8: return res;
    
    
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

        throw new ApiError(409," User with email or username already existed")
    };

    const avatarLocalPath =req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage[0]?.path;
     
    if (!avatar) {
      throw new ApiError(400,"Avatar file is required");
    }
    
    const avatar = await uploadOnCloudinar(avatarLocalPath);
    const coverImage = await uploadOnCloudinar(coverImageLocalPath);
    
    if (!avatar) {throw new ApiError(400,"Avatar file is required");}

    const user =await User.create({
        fullname,
        avatar : avatar.url,
        coverImage:coverImage?.url || "" ,
        email,
        password,
        username: username.toLowercase()
    })

    const createdUser =await User.findById(user.id).select(
        "-password -refreshToken"
    )

    if (!createdUser) {
        throw  new ApiError(500,"Something went wrong while registering the user")
    }
     
    return res.status(201).json(
        new ApiResponce(200,createdUser,"User register successfully")
    );


    
} )



export {registerUser} ;