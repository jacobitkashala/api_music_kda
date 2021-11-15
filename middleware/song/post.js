const express = require("express");

const { body, query, validationResult } = require("express-validator");
const songPostMiddleware = express();
const validationDataSong = [
	query("sonChanson").notEmpty().withMessage("Cannot be empty"),
	body("genreChanson").notEmpty().withMessage("Cannot be empty"),
	body("muniteChanson").notEmpty().withMessage("Cannot be empty"),
	body("imageChanson").notEmpty().withMessage("Cannot be empty"),
	body("nameChanson").notEmpty().withMessage("Cannot be empty"),
];

songPostMiddleware.use(
	validationDataSong,

	async (req, res, next) => {
		 // const { sonChanson, nameAutor, genreChanson, muniteChanson, imageChanson, nameChanson } =
		// req.body;
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		next();
	}
);

module.exports = songPostMiddleware;