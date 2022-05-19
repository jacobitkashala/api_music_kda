const { Album } = require('../../models');

const getPodcast = async (req, res) => {
  try {
    const podcasts = await Album.
    findAll({
      attributes: [
        ['id', 'id'],
        ['is_top', 'isTop'],
        ['id_album', 'idAlbum'],
        ['url_image', 'urlImage'],
        ['etat_album','etatAlbum'],
        ['title_album', 'titleAlbum'],
        ['contente_type', 'contenteType']
      ],
      where: {
        contente_type: "Podcast"
      }
    });
    return res.status(200).send(podcasts);
  } catch (error) {
    return res.status(500).send({ erreur: error });
  }
};
module.exports = getPodcast;
