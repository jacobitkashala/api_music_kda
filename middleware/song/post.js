const express = require('express');

const { body, validationResult } = require('express-validator');
const songPostMiddleware = express();

const validationDataSong = [
  body('idAlbum').notEmpty().withMessage(' idAlbum is empty'),
  body('urlSong').notEmpty().withMessage('urlSong is empty'),
  body('titleSong').notEmpty().withMessage('titleSong is empty'),
  body('typeSong').notEmpty().withMessage('typeSong is empty')
  
];

songPostMiddleware.use(validationDataSong, async (req, res, next) => {
  const errors = validationResult(req);
 // console.log("debut 03 ");
   // console.log(req.body);
    //   console.log(req.body);
  if (!errors.isEmpty()) {
    // console.log(req.body);
    return res.status(400).json({ errors: errors.array() });
  }

  // return res.status(400).json({ errors: "cool" });
 // console.log("next 03 ");
  next();
});

module.exports = songPostMiddleware;
