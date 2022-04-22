 const { Album,Songs } = require('../../models');

const postSong = async (req, res) => {
  const { idAlbum, titleSong, urlSong } = req.body;

  try {
    // console.log(idAlbum, titleSong, urlSong);
    const albumFind = await Album.findOne({
      where: {
        id: idAlbum
      }
    });

    if (albumFind) {
      const newSong = await Songs.create({
        title_songs: titleSong,
        url_song: urlSong,
        id_album: idAlbum,
      });
     return res.status(201).send(newSong);
    // return res.status(201).send({ message: 'true' });
    } else {
      return res.status(401).send({ erreur: 'the album does not exist' });
    }
  } catch (error) {
    return res.status(401).send({ erreur: error });
  }
};
module.exports = postSong;
