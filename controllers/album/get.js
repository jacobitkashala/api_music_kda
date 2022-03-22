const { Album } = require('../../models');

const getAlbum = async (req, res) => {
  try {
    const albums = await Album.findAll();

    return res.status(200).send(albums);
  } catch (error) {
    return res.status(500).send({ erreur: error });
  }
};
module.exports = getAlbum;
