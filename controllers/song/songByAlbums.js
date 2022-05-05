const { Album, Songs } = require('../../models');
// const { songRefIdAlbums } = require('../../utils');
// const { QueryTypes } = require('sequelize');

const getSongGroupByAlbums = async (req, res) => {
  try {

    const songByAlbums = await Album.findAll({
      attributes: [
        ['is_top', 'isTopAlbum'],
        ['url_image', 'urlImage'],
        ['title_album', 'titleAlbum']
      ],
      include: {
        model: Songs,
        attributes: [
          ['url_song', 'urlSong'],
          ['title_songs', 'titleSong']
        ]
      }
    });

    return res.status(200).send(songByAlbums);
  } catch (error) {
    return res.status(500).send({ erreur: error });
  }
};
module.exports = getSongGroupByAlbums;
