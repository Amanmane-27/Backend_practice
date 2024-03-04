import {asyncHandler} from "../utils/asyncHandler.js"

const registerUser = asyncHandler( async (req,res) => 
{
    res.status=(200)
    res.json({
        message:'OK',
    message1:"this is my first server" });
} )



export {registerUser}