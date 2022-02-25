const express = require('express');

const { body, validationResult } = require('express-validator');
const usersgPostMiddleware = express();

const validationDataSong = [
  body('nameUser').notEmpty().withMessage('nameUsers is empty'),
  body('passwordUser').notEmpty().withMessage('passwordUsers is empty'),
  body('roleUser').notEmpty().withMessage('roleUsers is empty'),
  body('emailUser')
    .notEmpty()
    .withMessage('emailUsers is empty')
    .isEmail()
    .withMessage('emailUsers is not email'),
  body('numberPhoneUser')
    .notEmpty()
    .withMessage('numberPhoneUsers is empty')
    .isNumeric()
    .withMessage('numberPhoneUsers is not numeric')
];

usersgPostMiddleware.use(validationDataSong, async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
});

module.exports = usersgPostMiddleware;
