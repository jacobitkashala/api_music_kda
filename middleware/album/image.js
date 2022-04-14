const express = require('express');
const { cloudinary } = require('../../utils/cloudinary');

const imageAlbumMiddleware = express();

imageAlbumMiddleware.use(async (request, response, next) => {
  try {
    const fileString = request.body.base64EncodedImage;

    const uploadedResponse = await cloudinary.v2.uploader.upload(
      'fileString',
      { upload_preset: 'imageAlbum' },
      (error, result) => {
        console.log(result, error);
      }
    );
    console.log(uploadedResponse);

    request.body.url_image = uploadedResponse.secure_url;

    // const uploadedResponse = await cloudinary.uploader.upload(fileString);

    console.log(fileString);
    next();
  } catch (error) {
    console.log(error);
    response.status(500).json({ errors: error });
  }
  // return res.status(400).json({ errors: "d" });
});

module.exports = imageAlbumMiddleware;
