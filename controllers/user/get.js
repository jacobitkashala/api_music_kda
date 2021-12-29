const { Users } = require('../../models');

const getUser = async (req, res) => {
  try {
    const user = await Users.findAll();

    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send({ erreur: error });
  }
};
module.exports = getUser;
