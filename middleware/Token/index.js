/* eslint-disable dot-notation */
const express = require('express');
const JWT = require('jsonwebtoken');

const vefifyAccesToken = express();

vefifyAccesToken.use(async (req, res, next) => {
// console.log("debut 01");
  // console.log(req.headers['authorization']);
  // console.log(req);
  if (!req.headers['authorization']) return res.status(401).send({ message: 'Non authoriser' });

  const authHeader = req.headers['authorization'];
  const bearerToken = authHeader.split(' ');
  const token = bearerToken[1];

  // console.log(token);
  JWT.verify(token, process.env.JWT_SECRET, (error, payload) => {
    if (error) {
      return res.status(401).send({ message: error });
    }
    req.payload = payload;
     // console.log(payload)
     // console.log("fin 01 next");
      next();
  });
});


module.exports = vefifyAccesToken;
