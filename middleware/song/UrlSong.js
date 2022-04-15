// cloudinary.v2.uploader.upload("dog.mp4",
//   {resource_type: "video", public_id: "myfolder/mysubfolder/my_dog",
//   overwrite: true, notification_url: "https://mysite.example.com/notify_endpoint"},
//   function(error, result) {console.log(result, error)});

const express = require('express');
const { cloudinary } = require('../../utils/cloudinary');

const urlSongMiddleware = express();

urlSongMiddleware.use(async (req, res, next) => {
  try {
    const { base64EncodedSong } = req.body;

    const uploadedres = await cloudinary.uploader.upload(base64EncodedSong, {
      upload_preset: 'SongVideo'
    });
    console.log(uploadedres);

    req.body.urlSong = uploadedres.secure_url;

    // next();
  } catch (error) {
    // console.log(error);
    res.status(500).json({ errors: error });
  }
  // return res.status(400).json({ errors: "d" });
});

module.exports = urlSongMiddleware;
