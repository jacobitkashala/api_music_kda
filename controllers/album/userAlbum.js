const { Album, Users } = require('../../models');

const getUserAlbum = async (req, res) => {
  try {
    const listeUserAssociatAlbm = await Users.findAll({
      attributes: [
        ['sex_user', 'sexUser'],
        ['etat_user', 'etatUser'],
        ['role_user', 'roleUser'],
        ['name_user', 'nameUser'],
        ['email_user', 'emailUser'],
        ['telephone_user', 'telephoneUser']
      ],
      include: {
        model: Album,
        attributes: [['title_album', 'titleAlbum']]
      }
    });

    return res.status(200).send(listeUserAssociatAlbm);
  } catch (error) {
    return res.status(500).send({ erreur: error });
  }
};

module.exports = getUserAlbum;
