const { sequelize } = require('../../models');
const { QueryTypes } = require('sequelize');

const getUserAlbum = async (req, res) => {
  // SELECT UsrAlg.name as nameUser,UsrAlg.titleAlbum as titleAlbum,UsrAlg.urlImage as urlImageAlbum, UsrAlg.isTop as isTopAlbum, UsrAlg.contenteType as contenteType,COUNT(url_song) as nbreSong
  // FROM (SELECT usr.name_user as name, alb.id as id,title_album as titleAlbum, url_image as urlImage,is_top as isTop,contente_type as contenteType
  //     FROM Albums AS alb
  //     JOIN  Users AS usr ON alb.id_user = usr.id
  //     ) AS UsrAlg
  // LEFT  JOIN Songs AS sgs ON sgs.id_album = UsrAlg.id   ; SELECT s.*, a.title_album FROM `Songs` s JOIN Albums a ON a.id = s.id_album
  try {
    const listeUserAssociatAlbm = await sequelize.query(
      `SELECT Users.name_user,Albums.title_album,Albums.url_image,Songs.url_song,Songs.title_songs 
      FROM Users 
      JOIN Albums ON Albums.id=Users.id 
      JOIN Songs ON Songs.id=Albums.id;
        `,
      { type: QueryTypes.SELECT }
    );

    return res.status(200).send(listeUserAssociatAlbm);
  } catch (error) {
    return res.status(500).send({ erreur: error });
  }
};

module.exports = getUserAlbum;
