const { Users } = require('../../models');

const getUser = async (req, res) => {
  try {

    const user = await Users.findAll({
      attributes: [
        ['id', 'id'],
        ['id_user', 'idUser'],
        ['sex_user', 'sexUser'],
        ['role_user', 'roleUser'],
        ['name_user', 'nameUser'],
        ['email_user', 'emailUser'],
        ['telephone_user', 'numberPhone']
      ]
    });

    // return res.status(200).send({ message: 'ok' });
    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send({ erreur: error });
  }
};
module.exports = getUser;
