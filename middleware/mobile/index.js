/* eslint-disable dot-notation */
const express = require('express');


const vefifyAccesTokenMobile = express();

vefifyAccesTokenMobile.use(async (req, res, next) => {
  // console.log(req.headers['authorization']);
  if (!req.headers['token']) return res.status(401).send({ message: 'Non authoriser' });

  const token = req.headers['token'];

  if (token) {
	return res.status(200).send({ message:token });
  }
  return res.status(200).send({ message:token });

   // req.payload = payload;
   // console.log(payload)
	// next();
});


module.exports = vefifyAccesTokenMobile;
