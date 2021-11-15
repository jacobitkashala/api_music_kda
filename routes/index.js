const { welcom, postSongs, getSongs, putSong, deleteSong } = require('../controllers');
const { songPostMiddleware  } = require('../middleware');

function routes(app) {
  app.route('/').get(welcom);

  app.route('/api/musik/song').post(songPostMiddleware, postSongs).get(getSongs);

  app.route('/api/musik/song/:uuid').get(putSong).delete(deleteSong);
}
module.exports = routes;
