const { Users, Album } = require('../../models');

const postAlbum = async (req, res) => {
  const { titleAlbum, urlImage, isTop, author, idUser,contentType } = req.body;

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
        contente_type: contentType,
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
module.exports = postAlbum;
