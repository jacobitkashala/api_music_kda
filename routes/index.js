const { welcom, postUser, authenticate, getUser } = require('../controllers');
const { userPostMiddleware, authUserMiddleware } = require('../middleware');
// postSongs, getSongs, putSong, deleteSong authentification api/

function routes(app) {
  app.route('/').get(welcom);

  // Authentification user

  app.route('/api/auth/local').post(authUserMiddleware, authenticate);

  app.route('/api/user').get(getUser).post(userPostMiddleware, postUser);

  // app.route('/api/musik/song/:uuid').get(putSong).delete(deleteSong);
}
module.exports = routes;
