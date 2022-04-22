const { sequelize } = require('../../models');
const { QueryTypes } = require('sequelize');

const getUserAlbum = async (req, res) => {
  try {
    // const numbreSong = await sequelize.query(
    //   `
    //     SELECT *
    //     FROM Albums AS alb
    //     JOIN Songs AS Sgs ON alb.id = Sgs.id_album
    //         ;
    //     `,
    //   { type: QueryTypes.SELECT }
    // );
    // 

    const listeUserAssociatAlbm = await sequelize.query(
      `
      SELECT UsrAlg.name as nameUser,UsrAlg.titleAlbum as titleAlbum,UsrAlg.urlImage as urlImageAlbum, UsrAlg.isTop as isTopAlbum, UsrAlg.contenteType as contenteType,sgs.url_song as urlSong
      FROM (SELECT usr.name_user as name, alb.id as id,title_album as titleAlbum, url_image as urlImage,is_top as isTop,contente_type as contenteType
          FROM Albums AS alb
          JOIN  Users AS usr ON alb.id_user = usr.id 
          ) AS UsrAlg
      JOIN Songs AS sgs ON sgs.id_album = UsrAlg.id   ;
        `,
      { type: QueryTypes.SELECT }
    );
    //
    return res.status(200).send(listeUserAssociatAlbm);
  } catch (error) {
    return res.status(500).send({ erreur: error });
  }
};

// "name": "George Dikamba",
//     "id": 1,
//     "titleAlbum": "jésus-christ reviendra",
//     "urlImage": "https://res.cloudinary.com/zenderp/image/upload/v1649959914/imageAlbum/rwpantb8evcdbiilztjo.jpg",
//     "isTop": 0,
//     "contenteType": "Musicien",
//     "id_songs": "cceee04b-54a2-4fe2-aa9f-54710de59f70",
//     "": "https://res.cloudinary.com/zenderp/video/upload/v1650561522/SongVideo/k7eofcqnk2gk1qbmca5q.mp3",
//     "title_songs": "ddddd",
//     "id_album": 1,
module.exports = getUserAlbum;
