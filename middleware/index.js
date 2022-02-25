const songPostMiddleware = require('./song/post');
const userPostMiddleware = require('./users/post');
const authUserMiddleware = require('./users/auth');

module.exports = {
  songPostMiddleware,
  userPostMiddleware,
  authUserMiddleware,
};
