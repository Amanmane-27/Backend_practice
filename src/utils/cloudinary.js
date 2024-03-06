
import {v2 as cloudinary} from "cloudinary";
import fs from "fs";//it help to manage file system

          
cloudinary.config({ 
  cloud_name:process.env.CLOUINARY_CLOUD_NAME , 
  api_key:process.env.CLOUINARY_API_KEY , 
  api_secret:process.env.CLOUINARY_API_SECRET,  
});

const  uploadOnCloudinar=async (localFilePath) => {
    try {
      if(!localFilePath) return null;
      //upload the file on cloudinary
      const responce=await cloudinary.uploader.upload(localFilePath,{
         resource_type:"auto"
      });
      //file has been uploaded success fully
      // console.log("File is uploaded on cloudinary",responce.url);
      fs.unlinkSync(localFilePath)
      return responce;
    } catch (error) {
      fs.unlinkSync(localFilePath)//remove the locally saved temporary file as the upload operation failed
      return null;
    }
}


export {uploadOnCloudinar}

