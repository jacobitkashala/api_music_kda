/* eslint-disable no-unused-vars */
const Cors = require('cors');
const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
// const { sequelize } = require('./models');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const corsOptions = {
  origin: '*',
  methods: 'GET,PUT,POST,DELETE',
  credentials: true,
  optionSuccessStatus: 200
};

app.use(Cors(corsOptions));

routes(app);

app.listen(PORT, async () => {
  try {
    // await sequelize.authenticate();
    console.log(`Our server is listening on the ${PORT} port`);
  } catch (error) {
    console.log('erreur :' + error);
  }
});
