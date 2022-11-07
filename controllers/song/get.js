const { Songs } = require('../../models');

const getSongs = async (req, res) => {
  const dataResponse = {};
  try {
    // let songs=[];
    const { idAlbum } = req.query;
    // console.log(idAlbum)
    if (idAlbum) {
      dataResponse.erreur = false;
      dataResponse.data = await Songs.findAll({ where: { id_album: idAlbum } });
    } else {
      dataResponse.erreur = false;
      dataResponse.data = await Songs.findAll();
    }

    return res.status(200).send(dataResponse);
  } catch (error) {
    dataResponse.erreur = true;
    dataResponse.data = error;
    return res.status(500).send(dataResponse);
  }
};
// module.exports.getSongsMobile = async (req, res) => {
//   try {
//     const {idAlbum} = req.query;
//     console.log(idAlbum)
//     const songs = await Songs.findAll();

//     return res.status(200).send(songs);
//   } catch (error) {
//     return res.status(500).send({ erreur: error });
//   }
// };
// module.exports = getSongsMobile;
module.exports = getSongs;
