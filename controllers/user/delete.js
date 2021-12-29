const { Users } = require('../../models');

const deleteUser = async (req, res) => {
  const { uuid } = req.params;
  // await User.destroy({
  // 	truncate: true
  //   });
  try {
    const user = await Users.destroy({
      where: { id_user: uuid }
    });

    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send({ erreur: error });
  }
};
module.exports = deleteUser;
