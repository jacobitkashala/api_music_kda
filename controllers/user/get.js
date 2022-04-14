const { Users } = require('../../models');

const getUser = async (req, res) => {
  try {
    // const responseUser = {
    //   id: '',
    //   sex: '',
    //   idUser: '',
    //   nameUser: '',
    //   mailUser: '',
    //   roleUser: '',
    //   numberPhoneUser: ''
    // };
    // const response = [];
    const user = await Users.findAll({
      attributes: [
        ['id_user', 'idUser'],
        ['role_user','roleUser'],
        ['name_user', 'nameUser'],
        ['email_user','emailUser'],
        ['sex_user','sexUser'],
        ['telephone_user','numberPhone'],
      ]
    });

    // return res.status(200).send({ message: 'ok' });
    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send({ erreur: error });
  }
};
module.exports = getUser;
