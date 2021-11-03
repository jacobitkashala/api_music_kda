const postChanson = (req, res) => {
  const { sonChanson, nameAutor, genreChanson, muniteChanson, imageChanson, nameChanson } =
    req.body;
  try {
    return res.status(200).send({
      message: sonChanson,
      nameAutor,
      genreChanson,
      muniteChanson,
      imageChanson,
      nameChanson
    });
  } catch (error) {
    return res.status(401).send({ error });
  }
};
module.exports = postChanson;
