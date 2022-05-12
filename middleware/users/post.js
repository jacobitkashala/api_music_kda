const express = require('express');

const { body, validationResult } = require('express-validator');
const usersgPostMiddleware = express();

const validationDataSong = [
  body('emailUser')
  .notEmpty()
  .isEmail()
  .withMessage('emailUsers is empty')
  .withMessage('emailUsers is not email'),
  body('nameUser').notEmpty().withMessage('nameUsers is empty'),
  body('etatUser').notEmpty().withMessage('nameUsers is empty'),
  body('sexUser').notEmpty().withMessage('nameUsers is empty'),
  body('roleUser').notEmpty().withMessage('roleUsers is empty'),
  body('passwordUser').notEmpty().withMessage('passwordUsers is empty'),
  body('numberPhoneUser')
    .notEmpty()
    .withMessage('numberPhoneUsers is empty')
    .isNumeric()
    .withMessage('numberPhoneUsers is not numeric')
    .isMobilePhone()
    .withMessage('Saisir le un numéro de téléphone')
];

usersgPostMiddleware.use(validationDataSong, async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
});

module.exports = usersgPostMiddleware;
