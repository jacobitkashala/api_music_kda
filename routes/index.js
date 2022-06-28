const {
  welcom,

  authenticate,

  getUser,
  postUser,

  postuserW,
  postAlbum,

  getSong,
  postSong,
  getSongPodcast,

  getAlbum,
  getPodcast,
  getUserAlbum,

  getSongGroupByAlbums
} = require('../controllers');

const {
  imageMiddleware,
  tokenMiddleware,
  mobileMiddleware,
  urlSongMiddleware,
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
    .post(tokenMiddleware, userPostMiddleware, postUser);

  // user lier à l'album
  app.route('/api/user/album').get(tokenMiddleware, getUserAlbum);

  // Route pour Album
  app
    .route('/api/album')
    .get(tokenMiddleware, getAlbum)
    .post(tokenMiddleware, imageMiddleware, albumPostMiddleware, postAlbum);

  app.route('/api/album/podcast').get(tokenMiddleware, getPodcast);

  // song
  app
    .route('/api/song')
    .get(tokenMiddleware, getSong)
    .post(tokenMiddleware, urlSongMiddleware, songPostMiddleware, postSong);

  app.route('/api/song/podcast').get(tokenMiddleware, getSongPodcast);

  app.route('/api/song/albums').get(tokenMiddleware, getSongGroupByAlbums);

  // root
  app.route('/api/userw').post(userPostMiddleware, postuserW);

  // enpoit mobele
  app.route('/api/:api_key').get(mobileMiddleware,welcom );
  // /movie?api_key=
  //  app.route('/api/musik/song/:uuid').get(putSong).delete(deleteSong);
}

module.exports = routes;
