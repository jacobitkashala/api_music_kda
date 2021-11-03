/* eslint-disable no-unused-vars */

const express = require('express');
const routes = require('./src/routes');

// const { sequelize } = require('./src/models')

const PORT = process.env.PORT || 8080;

const app = express();

routes(app);

// app.listen(PORT, async () => {
//   try {
//     await sequelize.authenticate()
//     console.log(`Our server is listening on the ${PORT} port`)
//   } catch (error) {
//     console.log('erreur :' + error)
//   }
// })
