const { Chansons } = require('../../models');

const postChanson = async (req, res) => {
  // const { sonChanson, nameAutor, genreChanson, muniteChanson, imageChanson, nameChanson } =
    // req.body;

  try {
    // console.log(sonChanson,
      // nameChanson,
      // genreChanson,
      // muniteChanson,
      // imageChanson,
      // nameAutor)
    const song = await Chansons.create({
      name_autor: 'gg',
      son_chanson: 'ttt',
      name_chanson: 'gg',
      genre_chanson: 'ff',
      munite_chanson: 'fff',
      image_chanson: 'rrr',
      
    });

    return res.status(200).send(song);
  } catch (error) {
    return res.status(401).send({ erreur: error });
  }
};
module.exports = postChanson;
