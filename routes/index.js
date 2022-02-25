const { welcom, postUser } = require('../controllers');
const { userPostMiddleware } = require('../middleware');
// postSongs, getSongs, putSong, deleteSong authentification api/auth/local

function routes(app) {
  app.route('/').get(welcom);

  app.route('/api/user').post(userPostMiddleware, postUser);

  // app.route('/api/musik/song/:uuid').get(putSong).delete(deleteSong);
}
module.exports = routes;
