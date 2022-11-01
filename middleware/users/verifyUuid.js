const { Users } = require('../../models');

const verifyUuid = async (req, res) => {
  const { uuid } = req.params;
  const dataResponse = {};
  try {
    const user = await Users.findOne({
      where: { id_user: uuid }
    });
    // const user = await Users.destroy({
    //   where: { id_user: uuid }
    // });  next();
    if (user == null) {
      dataResponse.error = true;
      dataResponse.message = "Cet utilisateur n'existe pas ";
      return res.status(400).send({ dataResponse });
    }

    return res.status(200).send({ dataResponse });
  } catch (error) {
    dataResponse.error = true;
    dataResponse.message = error;
    return res.status(500).send({ dataResponse });
  }
};
module.exports = verifyUuid;
