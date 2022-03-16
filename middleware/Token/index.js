/* eslint-disable dot-notation */
const express = require('express');
const JWT = require('jsonwebtoken');

const vefifyAccesToken = express();

vefifyAccesToken.use(async (req, res, next) => {
  console.log(req.headers['authorization']);
  if (!req.headers['authorization']) return res.status(203).send({ message: 'Non authoriser' });

  const authHeader = req.headers['authorization'];
  const bearerToken = authHeader.split(' ');
  const token = bearerToken[1];

  console.log(token);

  JWT.verify(token, process.env.JWT_SECRET, (error, payload) => {
    if (error) {
      return res.status(203).send({ message: error });
    }
    req.payload = payload;

    next();
  });
});


module.exports = vefifyAccesToken;
