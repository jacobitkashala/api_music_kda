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
		    WHERE  YEAR(NOW()) =  YEAR(Songs.createdAt) 
		    Group BY MONTH(Songs.createdAt);
		  `,
      { type: QueryTypes.SELECT }
    );

    const dataChartUsers = await sequelize.query(
      `SELECT COUNT(Users.id_user) as nbrUser ,MONTH(Users.createdAt) As mois 
        FROM Users 
        WHERE YEAR(NOW()) = YEAR(Users.createdAt) AND role_user <> "superAdmin" 
        Group BY MONTH(Users.createdAt);
		  `,
      { type: QueryTypes.SELECT }
    );

    const dataReporting = {
      error: false,
      albums: dataChartAlbums,
      songs: dataChartSongs,
      users: dataChartUsers
      // countUser:countUser[0].nbrUser
    };

    return res.status(200).send(dataReporting);
  } catch (error) {
    return res.status(500).send({ error: true, message: error });
  }
};
module.exports = reporting;
