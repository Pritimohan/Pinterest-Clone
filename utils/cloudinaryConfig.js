const cloudinary = require('cloudinary').v2;
const e = require('connect-flash');
const { error } = require('console');
const dotenv = require('dotenv');
const { join } = require('path');
dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_API_KEY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
});

const uploadToCloudinary = async (file) => {
    try {
        const result = await cloudinary.uploader.upload(file, {
            folder: "pinterestUploads",
            transformation: [ { width: 800, crop: "scale", quality: "auto:good" }]
        });
        return result.secure_url;
    } catch (err) {
        console.log("Error in uploading to cloudinary", err);
        return { err: "Error in uploading to cloudinary", err };
    }
};

module.exports = { uploadToCloudinary };