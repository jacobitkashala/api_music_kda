const { sequelize } = require('../../models');
const { QueryTypes } = require('sequelize');
const NodeCache = require('node-cache');
const myCache = new NodeCache({ stdTTL: 20 });

const reporting = async (req, res) => {
  const dataReporting = {
    error: true,
    albums: '',
    songs: '',
    users: '',
    nbrUser: '',
    nbrSong: '',
    nbrAlbum: ''
  };
  try {
    if (myCache.has('stateData')) {
      return res.status(200).send(myCache.get('stateData'));
    } else {
      const dataChartAlbums = await sequelize.query(
        `SELECT COUNT(id_album) As nbrAlbum ,MONTH(Albums.createdAt) As mois 
		    FROM Albums 
		    WHERE  YEAR(NOW()) = YEAR(Albums.createdAt) 
		    Group BY MONTH(Albums.createdAt);
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

      const countSong = await sequelize.query(
        `SELECT COUNT(Songs.id_songs) as nbrSong
		    FROM Songs 
		  ;
		  `,
        { type: QueryTypes.SELECT }
      );

      const countUsers = await sequelize.query(
        `SELECT COUNT(Users.id_user) as nbrUser
        FROM Users
        WHERE role_user <> "superAdmin" ;
		  `,
        { type: QueryTypes.SELECT }
      );
      const countAlbum = await sequelize.query(
        `SELECT COUNT(id_album) As nbrAlbum
      FROM Albums 
      ;
		  `,
        { type: QueryTypes.SELECT }
      );

      dataReporting.error = false;
      dataReporting.albums = dataChartAlbums;
      dataReporting.songs = dataChartSongs;
      dataReporting.users = dataChartUsers;
      dataReporting.nbrUser = countUsers[0].nbrUser;
      dataReporting.nbrSong = countSong[0].nbrSong;
      dataReporting.nbrAlbum = countAlbum[0].nbrAlbum;

      myCache.set('stateData', dataReporting);

      res.status(200).send(dataReporting);
    }
  } catch (error) {
    return res.status(500).send({ error: true, message: error });
  }
};
module.exports = reporting;
