import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });  
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localfilePath) => {
  try {
    if (!localfilePath) return null;

    const response = await cloudinary.uploader.upload(localfilePath, {
      resource_type: 'auto',
    });
    console.log('file is uploaded on cloudinary', response.url);
    return response;
  } catch (error) {
    console.error('Error uploading file to Cloudinary:', error);
    fs.unlinkSync(localfilePath); // Delete the local file if upload fails
    return null;
  }
};

export { uploadOnCloudinary };
