const { Users, Album } = require('../../models');

const postChanson = async (req, res) => {
  const { titleAlbum, urlImage, isTop, author, idUser } = req.body;

  try {
    const userFind = await Users.findOne({
      where: {
        id: idUser
      }
    });
    // console.log(userFind);
    // return res.status(201).send({ message: 'ok' });
    if (userFind) {
      const newAlbum = await Album.create({
        title_album: titleAlbum,
        url_image: urlImage,
        is_top: isTop,
        author,
        id_user: idUser
      });
      return res.status(201).send(newAlbum);
    } else {
      return res.status(401).send({ erreur: 'the person does not exist' });
    }
  } catch (error) {
    return res.status(401).send({ erreur: error });
  }
};
module.exports = postChanson;
