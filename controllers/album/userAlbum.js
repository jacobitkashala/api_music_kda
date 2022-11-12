const { Album, Users } = require('../../models');
// const { myCache } = require('../../utils');
const getUserAlbum = async (req, res) => {
  try {
    const userAssociatAlbm = {};
    // console.log();
    // console.log(req.query.limit);

    // const limit = 10;
    // const offset = (req.body.page - 1) * limit;
    if (!isNaN(req.query.offset) && !isNaN(req.query.limit)) {
      userAssociatAlbm.error = false;
      userAssociatAlbm.data = await Users.findAll({
        attributes: [
          ['id_user', 'idUser'],
          ['sex_user', 'sexUser'],
          ['etat_user', 'etatUser'],
          ['role_user', 'roleUser'],
          ['name_user', 'nameUser'],
          ['email_user', 'emailUser'],
          ['telephone_user', 'telephoneUser']
        ],
        offset: Number(req.query.offset),
        limit: Number(req.query.limit),
        order: [['id', 'DESC']],
        include: {
          model: Album,
          attributes: [['title_album', 'titleAlbum']]
        }
      });

      return res.status(200).send(userAssociatAlbm);
    } else {
      return res.status(200).send({ error: true, message: 'Mettez le offset et limit' });
    }

    // }
  } catch (error) {
    return res.status(500).send({ error: true, message: error });
  }
};

module.exports = getUserAlbum;
