/* eslint-disable no-unused-vars */

const express = require('express');
const Cors = require('cors');
const routes = require('./src/routes');
const { sequelize } = require('./src/models');

const PORT = process.env.PORT || 8080;

const app = express();
app.use(
  Cors({
    origin: ['*'],
    method: ['GET', 'PUT', 'POST', 'DELETE'],
    Credential: true
  })
);

app.use((req, resp, next) => {
  resp.setHeader('Access-Control-Allow-Origin', '*');
  resp.setHeader('Access-Control-Allow-Methods', 'OPTOINS, GET, POST, DELETE, PUT');
  resp.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

routes(app);

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log(`Our server is listening on the ${PORT} port`);
  } catch (error) {
    console.log('erreur :' + error);
  }
});
