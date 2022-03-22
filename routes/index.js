const {
  welcom,
  postUser,
  postuserW,
  authenticate,
  getUser,
  postAlbum,
  getAlbum
} = require('../controllers');
const {
  userPostMiddleware,
  authUserMiddleware,
  tokenMiddleware,
  albumPostMiddleware
} = require('../middleware');

function routes(app) {
  app.route('/').get(welcom);

  // Authentification user

  app.route('/api/auth/local').post(authUserMiddleware, authenticate);

  // Route pour User

  app
    .route('/api/user')
    .get(tokenMiddleware, getUser)
    .post(userPostMiddleware, tokenMiddleware, postUser);

  // Route pour Album
  app.route('/api/album').get(getAlbum).post(albumPostMiddleware, postAlbum);

  app.route('/api/userw').post(userPostMiddleware, postuserW);

  // app.route('/api/musik/song/:uuid').get(putSong).delete(deleteSong);
}
module.exports = routes;
