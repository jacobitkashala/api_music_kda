const { sequelize } = require('../../models');
const { QueryTypes } = require('sequelize');

const getSongGroupByAlbums = async (req, res) => {
  try {
     const SongGroupByAlbums = [];
    const SongInAlbum = {
      title: '',
      author: '',
      nbreSong: '',
      songs: []
    };
    // const Song = {
    //   urlSong: '',
    //   titleSongs: ''
    // };

    // console.log(Song);
    // console.log(SongInAlbum);
    // console.log(SongInAlbums);
    // SELECT id_album,url_song,title_songs FROM Songs
    //

    const albumsJoinUsers = await sequelize.query(
      `SELECT alb.id as idAlbum, us.name_user as author ,alb.title_album as titleAlbum,alb.url_image as urlImage, alb.is_top as isTop 
      FROM Albums as alb JOIN Users as us ON us.id = alb.id_user`,
      { type: QueryTypes.SELECT }
    );

    albumsJoinUsers.forEach((item) => {
      SongInAlbum.isTop = item.isTop;
      SongInAlbum.author = item.author;
      SongInAlbum.title = item.titleAlbum;
      SongInAlbum.urlImage = item.urlImage;

      SongGroupByAlbums.push(SongInAlbum)
    });

    // const numberSonGroupByAlbum = await sequelize.query(
    //   ` SELECT id_album as idAlbum,COUNT(*) as numberSong FROM Songs GROUP BY id_album`,
    //   { type: QueryTypes.SELECT }
    // );

    // const titleAndSongs = await sequelize.query(
    //   `SELECT id_album as idAlbum,url_song as urlSong,title_songs as titleSong
    //     FROM Songs`, {
    //   type: QueryTypes.SELECT
    // });
    // console.log(titleAndSongs);

    //
    return res.status(200).send(SongGroupByAlbums);
  } catch (error) {
    return res.status(500).send({ erreur: error });
  }
};
module.exports = getSongGroupByAlbums;
