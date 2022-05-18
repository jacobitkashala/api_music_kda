const { Album,Users } = require('../../models');

const getAlbum = async (req, res) => {
  try {
    const albums = await Users.findAll({
      attributes: [
        ['name_user', 'nameUser'],
      ],
      include: {
        model: Album,
        attributes: [
          ['id', 'id'],
          ['is_top', 'isTop'],
          ['id_album', 'idAlbum'],
          ['url_image', 'urlImage'],
          ['title_album', 'titleAlbum'],
          ['contente_type', 'contenteType']
        ]
      }
    });
    return res.status(200).send(albums);
  } catch (error) {
    return res.status(500).send({ erreur: error });
  }
};
module.exports = getAlbum;
