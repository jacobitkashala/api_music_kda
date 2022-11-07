const { Album } = require('../../models');
// const { Album, Songs } = require('../../models');
// const { Op } = require("sequelize");

const getSongGroupByAlbums = async (req, res) => {
  try {

    const songByAlbums = await Album.findAll({
      attributes: [
        ['id', 'id'],
        ['is_top', 'isTopAlbum'],
        ['url_image', 'urlImage'],
        ['title_album', 'titleAlbum']
      ],
      // include: {
      //   model: Songs,
      //   attributes: [
      //     ['id', 'id'],
      //     ['url_song', 'urlSong'],
      //     ['title_songs', 'titleSong']
      //   ]
      // }
     
    });

    return res.status(200).send(songByAlbums);
  } catch (error) {
    return res.status(500).send({ erreur: error });
  }
};
module.exports = getSongGroupByAlbums;
