const router = require("express").Router();
const { postSongs } = require('../controllers');

const {songPostMiddleware}= require('../middleware/song/post');

router.post('/api/musik/song',songPostMiddleware,postSongs);