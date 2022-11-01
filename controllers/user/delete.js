const { Users } = require('../../models');

const deleteUser = async (req, res) => {
  const { uuid } = req.params;
  // await User.destroy({
  // 	truncate: true
  //   });
  const dataResponse = {};
  try {
    const user = await Users.destroy({
      where: { id_user: uuid }
    });
    dataResponse.error = false;
    dataResponse.data = user;
    dataResponse.message = 'Suppression effectuée avec succès';
    return res.status(200).send({ dataResponse });
  } catch (error) {
    dataResponse.error = true;
    dataResponse.message = error;
    return res.status(500).send({ dataResponse });
  }
};
module.exports = deleteUser;
