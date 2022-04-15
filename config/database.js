const {DB_NAME, DB_USER, DB_PASS, DB_HOST, DB_CONNECTION_TIMEOUT} = require('./index');
module.exports = {
    "development": {
      "use_env_variable":DB_USER,
      "username": DB_USER,
      "password": DB_PASS,
      "database": DB_NAME,
      "host": DB_HOST,
      "dialect": "mysql",
      // "operatorsAliases": false,
      "dialectOptions": {
          "options": {
              requestTimeout: DB_CONNECTION_TIMEOUT
      }
    }
}
}