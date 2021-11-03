const { welcom, postChanson } = require('../controllers');

function routes(app) {
  app.route('/').get(welcom);

  app.route('/api/chanson').post(postChanson);
}
module.exports = routes;
