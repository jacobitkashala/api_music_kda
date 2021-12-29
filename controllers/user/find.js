const { Users } = require('../../models');

const getUser = async (req, res) => {
  const { uuid } = req.params;
  
  try {
    const user = await Users.findOne({
      where: { id_user: uuid }
    });

    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send({ erreur: error });
  }
};
module.exports = getUser;
