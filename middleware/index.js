const songPostMiddleware = require('./song/post');

const albumPostMiddleware = require('./album/post');

const userPostMiddleware = require('./users/post');

const authUserMiddleware = require('./users/auth');
const tokenMiddleware = require('./Token');

module.exports = {
  albumPostMiddleware,
  songPostMiddleware,
  userPostMiddleware,
  authUserMiddleware,
  tokenMiddleware
};
