// const { Op } = require("sequelize");
const { Songs } = require('../../models');

const getSongs = async (req, res) => {
  try {
    const songs = await Songs.findAll();

    return res.status(200).send(songs);
  } catch (error) {
    return res.status(500).send({ erreur: error });
  }
};
module.exports = getSongs;
