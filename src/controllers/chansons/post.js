const { Chansons } = require('../../models');

const postChanson = async (req, res) => {
  const { sonChanson, nameAutor, genreChanson, muniteChanson, imageChanson, nameChanson } =
    req.body;
  try {
    const songs = await Chansons.create({
      son_chanson: sonChanson,
      name_chanson: nameChanson,
      genre_chanson: genreChanson,
      munite_chanson: muniteChanson,
      image_chanson: imageChanson,
      name_autor: nameAutor
    });

    return res.status(200).send(songs);
  } catch (error) {
    return res.status(401).send({ erreur: error });
  }
};
module.exports = postChanson;
