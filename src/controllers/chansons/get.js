const { Chansons } = require('../../models');

const getChanson = async (req, res) => {
  try {
    const songs = await Chansons.findAll();

    return res.status(200).send(songs);
  } catch (error) {
    return res.status(500).send({ erreur: error });
  }
};
module.exports = getChanson;
