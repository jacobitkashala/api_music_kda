const express = require('express');

const { body, validationResult } = require('express-validator');
const authMiddleware = express();

const validationDataAuth = [
  body('passwordUser').notEmpty().withMessage('passwordUsers is empty'),
  body('emailUser')
    .notEmpty()
    .withMessage('emailUsers is empty')
    .isEmail()
    .withMessage('emailUsers is not email')
];

authMiddleware.use(validationDataAuth, async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // console.log("next")
  
 // return res.status(200).json({ errors: "bien" });

   next();
});

module.exports = authMiddleware;
