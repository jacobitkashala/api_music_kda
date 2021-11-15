const { Chansons } = require('../../models');

const getChanson = async (req, res) => {
  const { uuid } = req.params;
  // console.log(uuid);
  try {
    const song = await Chansons.findOne({
      where: { id_chanson: uuid }
    });

    return res.status(200).send(song);
  } catch (error) {
    return res.status(500).send({ erreur: error });
  }
};
module.exports = getChanson;
