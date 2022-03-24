const { sequelize } = require('../../models');
const { QueryTypes } = require('sequelize');

const getUserAlbum = async (req, res) => {
  try {
    const listeUserAssociatAlbm = await sequelize.query(
      `
        SELECT name_user,role_user,email_user,sex_user,telephone_user,title_album,url_image,is_top,author
             FROM Albums AS alb
            JOIN Users AS usr ON alb.id_user = usr.id
            ;
        `,
      { type: QueryTypes.SELECT }
    );

    return res.status(200).send(listeUserAssociatAlbm);
  } catch (error) {
    return res.status(500).send({ erreur: error });
  }
};
module.exports = getUserAlbum;
