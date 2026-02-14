import { v2 as cloudinary } from 'cloudinary'

import fs from 'fs'
import dotenv from "dotenv";
dotenv.config();


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const fileupload = async (localfileuploadpath) => {

  try {
    if (!localfileuploadpath) {
      return null;
    }
    const response = await cloudinary.uploader.upload(localfileuploadpath, {
      resource_type: 'auto'
    })
    console.log("file is uploadad suscessfuly on :", response);
    return response.secure_url;

  } catch (error) {
    await fs.promises.unlink(localfileuploadpath)
    console.log(error)
  }

}

export default fileupload;


