const express = require('express');
const { cloudinary } = require('../../utils/cloudinary');

const imageAlbumMiddleware = express();

imageAlbumMiddleware.use(async (req, res, next) => {
  try {
    const { base64EncodedImage } = req.body;

    const uploadedres = await cloudinary.uploader.upload(base64EncodedImage, {
      upload_preset: 'imageAlbum'
    });
    // console.log(uploadedres);

    req.body.urlImage = uploadedres.secure_url;

    next();

  } catch (error) {
   // console.log(error);
    res.status(500).json({ errors: error });
  }
  // return res.status(400).json({ errors: "d" });
});

module.exports = imageAlbumMiddleware;
