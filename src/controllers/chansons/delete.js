const { Chansons } = require('../../models');

const deleteSong = async (req, res) => {
  const { uuid } = req.params;
  // await User.destroy({
  // 	truncate: true
  //   });
  try {
    const songs = await Chansons.destroy({
      where: { id_chanson: uuid }
    });

    return res.status(200).send(songs);
  } catch (error) {
    return res.status(500).send({ erreur: error });
  }
};
module.exports = deleteSong;
