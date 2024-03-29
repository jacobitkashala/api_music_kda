const { Album, Songs } = require('../../models');
// const { Album } = require('../../models');

const postSong = async (req, res) => {
   const { idAlbum, titleSong, urlSong,typeSong } = req.body;
  // const { idAlbum, titleSong, urlSong } = req.body;

  try {
     console.log(idAlbum, titleSong, urlSong);
    const findIdAlbum = await Album.findAll({
      where: {
        id: idAlbum
      }
    });

    //  console.log(songs)

     if (findIdAlbum) {
       const newSong = await Songs.create({
         title_songs: titleSong,
         url_song: urlSong,
         type_son:typeSong,
         id_album: idAlbum,
       });
      return res.status(201).send(newSong);
     // return res.status(201).send({ message: 'true' });
     } else {
       return res.status(401).send({ erreur: 'the album does not exist' });
     }
    // return res.status(401).send({ erreur: 'the album does not exist' });
  } catch (error) {
    return res.status(500).send({ erreur: error });
  }
};
module.exports = postSong;
