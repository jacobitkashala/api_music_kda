/* eslint-disable no-unused-vars */
const Cors = require('cors');
const express = require('express');
const routes = require('./src/routes');
const bodyParser = require('body-parser');
const { sequelize } = require('./src/models');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

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
// app.use("/",routes);

routes(app);

app.listen(PORT, async () => {
  try {
    // await sequelize.authenticate();
    console.log(`Our server is listening on the ${PORT} port`);
  } catch (error) {
    console.log('erreur :' + error);
  }
});
