const { sequelize } = require('../../models');
const { QueryTypes } = require('sequelize');

const reporting = async (req, res) => {
  try {
    const dataChartAlbums = await sequelize.query(
      `SELECT COUNT(id_album) As nbrAlbum ,MONTH(Albums.createdAt) As mois 
		FROM Albums 
		WHERE  YEAR(NOW()) = YEAR(Albums.createdAt) 
		Group BY MONTH(Albums.createdAt)   ;
		  `,
      { type: QueryTypes.SELECT }
    );

    const dataChartSongs = await sequelize.query(
      `SELECT COUNT(Songs.id_songs) as nbrSong ,MONTH(Songs.createdAt) As mois 
		FROM Songs 
		WHERE  YEAR(NOW()) =YEAR(Songs.createdAt) 
		Group BY MONTH(Songs.createdAt)   ;
		  `,
      { type: QueryTypes.SELECT }
    );
    const countUser = await sequelize.query(
      `SELECT COUNT(Users.id_user) as nbrUser 
		FROM Users 
		WHERE  YEAR(NOW()) =YEAR(Users.createdAt) 
		 ;
		  `,
      { type: QueryTypes.SELECT }
    );

    const dataReporting = {
      // nbrAlbum:nbrAlbum,
       countUser:countUser[0].nbrUser,
      albums: dataChartAlbums,
      songs: dataChartSongs
    };

    return res.status(200).send(dataReporting);
  } catch (error) {
    return res.status(500).send({ erreur: error });
  }
};
module.exports = reporting;
