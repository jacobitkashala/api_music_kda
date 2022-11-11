const {
  welcom,

  authenticate,

  Users,
  postUser,
  postuserW,
  deleteUser,
  updateUser,

  postAlbum,
  getAlbum,

  getSong,
  postSong,
  // getSongPodcast,

  getPodcast,
  getUserAlbum,
  findUserById,
  reporting,
  getSongGroupByAlbums
} = require('../controllers');

const {
  imageMiddleware,
  tokenMiddleware,
  // mobileMiddleware,
  verifyUuiduser,
  urlSongMiddleware,
  userPostMiddleware,
  authUserMiddleware,
  songPostMiddleware,
  albumPostMiddleware,
  tokenMiddlewareMobile
} = require('../middleware');

function routes(app) {
  app.route('/api/v1').get(welcom);

  // Authentification user
  app.route('/api/v1/auth/local').post(authUserMiddleware, authenticate);

  // Route pour User
  app
    .route('/api/v1/users')
    .get(tokenMiddleware, Users)
    .post(tokenMiddleware, userPostMiddleware, postUser);
  app
    .route('/api/v1/users/:uuid')
    .get(tokenMiddleware, verifyUuiduser,findUserById)
    .delete(tokenMiddleware, verifyUuiduser,deleteUser)
    .put(tokenMiddleware, verifyUuiduser,updateUser);

  // user lier à l'album
  app.route('/api/v1/user/album').get(tokenMiddleware, getUserAlbum);

  // Route pour Album
  app
    .route('/api/v1/album')
    .get(tokenMiddleware, getAlbum)
    .post(tokenMiddleware, imageMiddleware, albumPostMiddleware, postAlbum);

  app.route('/api/v1/reporting').get(tokenMiddleware, reporting);

  app
    .route('/api/v1/songs')
    .get(tokenMiddleware, getSong)
    .post(tokenMiddleware, urlSongMiddleware, songPostMiddleware, postSong);

  app.route('/api/v1/podcast').get(tokenMiddleware, getPodcast);
  //  app.route('/api/musik/song/:uuid').get(putSong).delete(deleteSong);
  
 // app.route('/api/v1/song/podcast').get(tokenMiddleware, getSongPodcast);

app.route('/api/v1/songs/albums').get(tokenMiddleware, getSongGroupByAlbums);

  // mobile
app.route('/api/v1/albums/mobile').get(tokenMiddlewareMobile, getSongGroupByAlbums);
  // song
app
    .route('/api/v1/songs/mobile')
    .get(tokenMiddlewareMobile, getSong);

  // enpoit mobile
  // app.route('/api/song/album/mobile').get(mobileMiddleware, getSongGroupByAlbums);


    // root
    app.route('/api/userw').post(userPostMiddleware, postuserW);
}

module.exports = routes;
