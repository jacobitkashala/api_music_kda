const express = require("express");

const { body, validationResult } = require("express-validator");
const albumPostMiddleware = express();

const validationAlbum = [
	body("idUser").notEmpty().withMessage(" idUser is empty"),
	body("titleAlbum").notEmpty().withMessage("titleAlbum is empty"),
	body("urlImage").notEmpty().withMessage("urlImage is empty"),
	body("isTop").notEmpty().withMessage("isTop is empty"),
	body("author").notEmpty().withMessage("author is empty"),
	body("contentType").notEmpty().withMessage("contentType is empty"),
];

albumPostMiddleware.use(
	validationAlbum,
	async (req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		// return res.status(400).json({ errors: "d" });
		 next();
	}
);

module.exports = albumPostMiddleware;