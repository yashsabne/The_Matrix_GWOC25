const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dez41esfq',  // Replace with your Cloudinary Cloud Name
  api_key: '772471848773624',        // Replace with your Cloudinary API Key
  api_secret: '640U4hHY9Q8UAC36foBkST6O0ZY'   // Replace with your Cloudinary API Secret
});

module.exports = cloudinary;
