const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_APIKEY,
  api_secret: process.env.CLOUD_APISECRET
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: { folder: 'Wanderlust_Dev', allowed_formats: ['jpeg','png','jpg'] }
});

module.exports = { cloudinary, storage };
