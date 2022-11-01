const { Users, Album } = require('../../models');
// const { Users, Album, Songs } = require('../../models');
// const { Op } = require('sequelize');

const getUser = async (req, res) => {
  const { uuid } = req.params;
  const dataResponse = {};

  try {
    // io send grid const idUser = await Users.findOne({
    //   attributes: [['id', 'id']],
    //   where: { id_user: uuid }
    // });

    const user = await Users.findOne({
      attributes: [
        ['id', 'idUser'],
        ['name_user', 'name'],
        ['telephone_user', 'numberPhone'],
        ['role_user', 'role'],
        ['sex_user', 'sexe'],
        ['etat_user', 'state'],
        ['email_user', 'email']
      ],
      include: {
        model: Album,
        attributes: [
          ['id_album', 'idAlbum'],
          ['contente_type', 'contenteType'],
          ['title_album', 'titleAlbum'],
          ['is_top', 'isTop'],
          ['etat_album', 'stateAlbum']
        ]
      },
      where: { id_user: uuid }
    });
    dataResponse.erreur = false;
    dataResponse.data = user;
    return res.status(200).send({ dataResponse });
  } catch (error) {
    dataResponse.erreur = true;
    dataResponse.message = error;
    return res.status(500).send({ dataResponse });
  }
};
module.exports = getUser;
