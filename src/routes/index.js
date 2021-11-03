const { welcom } = require('../controllers');

function routes(app) {
  app.route('/').get(welcom);
}
module.exports = routes;
