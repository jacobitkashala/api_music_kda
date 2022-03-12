const songPostMiddleware = require('./song/post');
const userPostMiddleware = require('./users/post');
const authUserMiddleware = require('./users/auth');
const tokenMiddleware = require('./Token');

module.exports = {
  songPostMiddleware,
  userPostMiddleware,
  authUserMiddleware,
  tokenMiddleware
};
