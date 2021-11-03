const { Chansons } = require('../../models');

const postChanson = (req, res) => {
  const { sonChanson, nameAutor, genreChanson, muniteChanson, imageChanson, nameChanson } =
    req.body;
  try {
    console.log(sonChanson, nameAutor, genreChanson, muniteChanson, imageChanson, nameChanson);
    const Chan = Chansons.create({
      sonChanson,
      nameAutor,
      genreChanson,
      muniteChanson,
      imageChanson,
      nameChanson
    });

    return res.status(200).send(Chan);
  } catch (error) {
    return res.status(401).send({ erreur: error });
  }
};
module.exports = postChanson;
