const { welcom } = require('../controllers');
// const { songPostMiddleware  } = require('../middleware');postSongs, getSongs, putSong, deleteSong

function routes(app) {
  app.route('/').get(welcom);

  // app.route('/api/musik/song').post(postSongs).get(getSongs);

  // app.route('/api/musik/song/:uuid').get(putSong).delete(deleteSong);
}
module.exports = routes;
