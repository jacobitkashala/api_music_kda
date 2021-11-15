const { Chansons } = require('../../models');

const postChanson = async (req, res) => {
  const { sonChanson, nameAutor, genreChanson, muniteChanson, imageChanson, nameChanson } =
    req.body;

  try {
    const song = await Chansons.create({
      name_autor: nameAutor,
      son_chanson: sonChanson,
      name_chanson: nameChanson,
      genre_chanson: genreChanson,
      munite_chanson: muniteChanson,
      image_chanson: imageChanson,
      
    });

    return res.status(200).send(song);
  } catch (error) {
    return res.status(401).send({ erreur: error });
  }
};
module.exports = postChanson;
