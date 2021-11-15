const express = require("express");

const { body, validationResult } = require("express-validator");
const songPostMiddleware = express();

const validationDataSong = [
	body("sonChanson").notEmpty().withMessage(" sonChanson is empty"),
	body("genreChanson").notEmpty().withMessage("genreChanson is empty"),
	body("muniteChanson").notEmpty().withMessage("muniteChanson is empty"),
	body("imageChanson").notEmpty().withMessage("imageChanson is empty"),
	body("nameChanson").notEmpty().withMessage("nameChanson is empty"),
];

songPostMiddleware.use(
	validationDataSong,
	async (req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		next();
	}
);

module.exports = songPostMiddleware;