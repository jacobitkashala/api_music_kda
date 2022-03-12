const express = require('express');
// const JWT = require('jsonwebtoken');

const vefifyAccesToken = express();

vefifyAccesToken.use(async (req, res, next) => {
  //   if (!req.headers['authorization']) return next(createError.Unauthorized());
  //   const authHeader = req.headers['authorization'];
  //   const bearerToken = authHeader.split(' ');
  //   const token = bearerToken[1];
  //   JWT.verify(token, process.env.JWT_SECRET, (err, payload) => {
  //     if (error) {
  //       return next(createError.Unauthorized());
  //     }
  //     req.payload = payload;
  //     next();
  //   });
});

module.exports = vefifyAccesToken;
