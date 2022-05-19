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

  getSongGroupByAlbums,
  
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

  app
  .route('/api/auth/local')
  .post(authUserMiddleware, authenticate);

  // Route pour User
  app
    .route('/api/user')
    .get(tokenMiddleware, getUser)
    .post(tokenMiddleware, userPostMiddleware, postUser);

    // PodCast
  app
    .route('/api/album/podcast')
    .get(tokenMiddleware, getPodcast)
  
    app
    .route('/api/song/podcast')
    .get(tokenMiddleware, getSongPodcast)
  

    // Route pour Album
  app
    .route('/api/album')
    .get(tokenMiddleware, getAlbum)
    .post(tokenMiddleware, imageMiddleware, albumPostMiddleware, postAlbum);
  
    // user lier à l'album
  app.
  route('/api/user/album')
  .get(tokenMiddleware, getUserAlbum);
  
  // user lier à l'album 
  app.
  route('/api/user/album/song')
  .get(tokenMiddleware, getUserAlbum);

  // song
  app
    .route('/api/song')
    .get(tokenMiddleware, getSong)
    .post(tokenMiddleware, urlSongMiddleware, songPostMiddleware, postSong);

     // song
  app
  .route('/api/song/albums')
  .get(tokenMiddleware, getSongGroupByAlbums)

  // root
  app
  .route('/api/userw')
  .post(userPostMiddleware, postuserW);

  // enpoit mobele
  app
  .route('/api/album/mobile')
  .get(mobileMiddleware, getSongGroupByAlbums);

  //  app.route('/api/musik/song/:uuid').get(putSong).delete(deleteSong);
}


module.exports = routes;
