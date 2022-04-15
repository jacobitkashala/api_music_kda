/* eslint-disable no-unused-vars */
const Cors = require('cors');
const express = require('express');
const routes = require('./routes');
// const bodyParser = require('body-parser');
// const { sequelize } = require('./models');
const app = express();

const PORT = process.env.PORT || 8080;

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// const corsOptions = {
//   origin: '["http://localhost:3000",/.{5,6}\\/\\/Ndule-1-.{8,}/]',
//   methods: 'GET,PUT,POST,DELETE',
//   credentials: true,
//   optionSuccessStatus: 200
// };

const corsOptions = {
  origin: '*',
  methods: 'GET,PUT,POST,DELETE',
  credentials: true,
  optionSuccessStatus: 200
};

app.use(Cors(corsOptions));

app.get("/",(req,res)=>{
return res.status(200).send({ erreur: 'the person does not exist' });
})
routes(app);

app.listen(PORT, async () => {
  try {
    // await sequelize.authenticate();
    console.log(`Our server is listening on the ${PORT} port`);
  } catch (error) {
    console.log('erreur :' + error);
  }
});
