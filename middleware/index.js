const songPostMiddleware = require('./song/post');
const urlSongMiddleware = require('./song/UrlSong');

const imageMiddleware = require('./album/image');
const albumPostMiddleware = require('./album/post');

const userPostMiddleware = require('./users/post');

const authUserMiddleware = require('./users/auth');

const tokenMiddleware = require('./Token');

module.exports = {
  imageMiddleware,
  tokenMiddleware,
  urlSongMiddleware,
  songPostMiddleware,
  userPostMiddleware,
  authUserMiddleware,
  albumPostMiddleware
};
