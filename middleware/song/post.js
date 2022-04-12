const express = require("express");

const { body, validationResult } = require("express-validator");
const songPostMiddleware = express();

const validationDataSong = [
	body("idAlbum").notEmpty().withMessage(" idAlbum is empty"),
	body("urlSongs").notEmpty().withMessage("urlSongs is empty"),
	body("titleSongs").notEmpty().withMessage("titleSongs is empty"),
];

songPostMiddleware.use(
	validationDataSong,
	async (req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		// return res.status(400).json({ errors: "cool" });
		next();
	}
);

module.exports = songPostMiddleware;