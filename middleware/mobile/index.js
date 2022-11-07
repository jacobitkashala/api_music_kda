/* eslint-disable dot-notation */
const express = require('express');


const vefifyAccesTokenMobile = express();

vefifyAccesTokenMobile.use(async (req, res, next) => {
 
  const {token} = req.query;
 // console.log(  token);

  if (token === "sUmVsifj8iCS0nfrPg8UtM4MtQA") next();
  else return res.status(400).send({ message:"verify your token "});
  // next();
   // req.payload = payload;
   // console.log(payload)
	// next();
});


module.exports = vefifyAccesTokenMobile;
