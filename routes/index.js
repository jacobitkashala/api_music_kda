const {
  welcom,
  getUser,
  postUser,
  getAlbum,
  postuserW,
  postAlbum,
  postSong,
  getSong,
  getUserAlbum,
  authenticate
} = require('../controllers');
const {
  imageMiddleware,
  tokenMiddleware,
  userPostMiddleware,
  authUserMiddleware,
  songPostMiddleware,
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
  app
    .route('/api/album')
    .get(tokenMiddleware, getAlbum)
    .post(imageMiddleware, albumPostMiddleware, tokenMiddleware, postAlbum);

  app.route('/api/userAlbum').get(tokenMiddleware, getUserAlbum);

  // song
  app
    .route('/api/song')
    .get(tokenMiddleware, getSong)
    .post(tokenMiddleware, songPostMiddleware, postSong);

  // root
  app.route('/api/userw').post(userPostMiddleware, postuserW);

  // app.route('/api/musik/song/:uuid').get(putSong).delete(deleteSong);
  
}
module.exports = routes;
