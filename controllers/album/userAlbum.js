const { sequelize } = require('../../models');
const { QueryTypes } = require('sequelize');

const getUserAlbum = async (req, res) => {
  try {
    const listeUserAssociatAlbm = await sequelize.query(
      `
        SELECT name_user as name, id_album as id,title_album as titleAlbum, url_image as urlImage,is_top as isTop,contente_type as contenteType
        FROM Albums AS alb
        JOIN Users AS usr ON alb.id_user = usr.id
            ;
        `,
      { type: QueryTypes.SELECT }
    );
    //
    return res.status(200).send(listeUserAssociatAlbm);
  } catch (error) {
    return res.status(500).send({ erreur: error });
  }
};
module.exports = getUserAlbum;
