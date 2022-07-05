
const express = require('express');
const { cloudinary } = require('../../utils/cloudinary');

const urlSongMiddleware = express();

urlSongMiddleware.use(async (req, res, next) => {
 // console.log("debut 02 ");
  try {
    const { base64EncodedSong } = req.body;

    const uploadedres = await cloudinary.uploader.upload(base64EncodedSong, {
      upload_preset: 'SongVideo',
      resource_type: 'video'
      // upload_preset: 'imageAlbum'
    });

    // console.log(uploadedres.secure_url);

    req.body.urlSong = await uploadedres.secure_url;
    // console.log(req.body.urlSong);
    // console.log("next 02 ");
    next();
  } catch (error) {
    // console.log(error);
    res.status(500).json({ errors: error });
  }
  // return res.status(400).json({ errors: "d" });
});

module.exports = urlSongMiddleware;
