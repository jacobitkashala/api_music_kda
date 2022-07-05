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

  // getSongByIdAlbum,

  getSongGroupByAlbums
} = require('../controllers');

const {
  imageMiddleware,
  tokenMiddleware,
  // mobileMiddleware,
  urlSongMiddleware,
  userPostMiddleware,
  authUserMiddleware,
  songPostMiddleware,
  albumPostMiddleware,
  tokenMiddlewareMobile
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
  
    // mobile
    app
    .route('/api/song/album/mobile')
    .get(tokenMiddlewareMobile, getSongGroupByAlbums)
    
    // app.route('/api/album/mobile/:uuid').get(tokenMiddlewareMobile,getSongByIdAlbum);

   // app.route('/api/album/mobile').get(tokenMiddlewareMobile,getSongByIdAlbum);
    // .post(tokenMiddleware, imageMiddleware, albumPostMiddleware, postAlbum);

  app.route('/api/album/podcast').get(tokenMiddleware, getPodcast);

  // song
  app
    .route('/api/song')
    .get(tokenMiddleware, getSong)
    .post(tokenMiddleware, urlSongMiddleware, songPostMiddleware, postSong);

  app.route('/api/song/podcast').get(tokenMiddleware, getSongPodcast);

  app.route('/api/song/albums').get(tokenMiddleware, getSongGroupByAlbums);

  
  // enpoit mobile
  // app.route('/api/song/album/mobile').get(mobileMiddleware, getSongGroupByAlbums);

  //  app.route('/api/musik/song/:uuid').get(putSong).delete(deleteSong);

  // root
  app.route('/api/userw').post(userPostMiddleware, postuserW);

}

module.exports = routes;
