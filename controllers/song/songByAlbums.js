const {  Album, Songs } = require('../../models');
// const { songRefIdAlbums } = require('../../utils');
// const { QueryTypes } = require('sequelize');

const getSongGroupByAlbums = async (req, res) => {
  try {
    // const SongGroupByAlbums = [];
    // const SongInAlbum = {sequelize
    //   title: '',
    //   author: '',
    //   songs: []
    // };
    // const Song = { , Users ,Songs
    //   urlSong: '',
    //   titleSongs: ''
    // };

    // console.log(Song);
    // console.log(SongInAlbum);
    // console.log(SongInAlbums);
    // SELECT id_album,url_song,title_songs FROM Songs
    //
    // const titleAndSongs = await sequelize.query(
    //   `SELECT id_album as idAlbum,url_song as urlSong,title_songs as titleSong
    //     FROM Songs`,
    //   {
    //     type: QueryTypes.SELECT
    //   }
    // );
    // const albumsJoinUsers = await sequelize.query(
    //   `SELECT alb.id as idAlbum, us.name_user as author ,alb.title_album as titleAlbum,alb.url_image as urlImage, alb.is_top as isTop 
    //   FROM Albums as alb 
    //   JOIN Users as us ON us.id = alb.id_user`,
    //   { type: QueryTypes.SELECT }
    // );

    // console.log(numberSonGroupByAlbum);
    // const Songss = await Users.findAll({
    //   attributes:["name_user"],
    //   includes:{
    //     model : Album,
    //     attributes:["title_album", "is_top","url_image" ],
    //     includes:{
    //       model : Songs,
    //       attributes:["id_songs", "url_song","title_songs" ],
    //     }
    //   }
    // })

    const Songss = await  Songs.findAll({
      include: {
        model: Album
      }
    });
    // albumsJoinUsers.forEach((item) => {
    //   const song = songRefIdAlbums(item.idAlbum, titleAndSongs);
    //   // console.log(song);
    //   SongInAlbum.isTop = item.isTop;
    //   SongInAlbum.author = item.author;
    //   SongInAlbum.title = item.titleAlbum;
    //   SongInAlbum.urlImage = item.urlImage;
    //   SongInAlbum.songs.push(song);

    //   SongGroupByAlbums.push(SongInAlbum);
    // });
    /**
 * SELECT alb.id as idAlbum, us.name_user as author ,alb.title_album as titleAlbum,alb.url_image as urlImage, alb.is_top as isTop FROM Albums as alb JOIN Users as us ON us.id = alb.id_user JOIN Songs as sg ON sg.id_album = alb.id

 */

    // console.log(titleAndSongs);

    //
    return res.status(200).send(Songss);
  } catch (error) {
    return res.status(500).send({ erreur: error });
  }
};
module.exports = getSongGroupByAlbums;
