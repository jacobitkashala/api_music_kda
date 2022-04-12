const { Songs } = require('../../models');
// const { songPostMiddleware } =require('../../middleware');

const postSong = async ( req, res) => {
  const {  idAlbum, genreChanson, urlSong } =
    req.body;

  try {
    const song = await Songs.create({
      id_album: idAlbum,
      url_song: urlSong,
      title_songs: genreChanson
    });

    return res.status(200).send(song);
  } catch (error) {
    return res.status(401).send({ erreur: error });
  }
};
module.exports = postSong;
