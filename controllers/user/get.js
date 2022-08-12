const { Users } = require('../../models');



const getUser = async (req, res) => {
  try {
    let user;

    if (!isNaN(req.query.page)) {
      
      user = await Users.findAll({
        attributes: [
          ['id', 'id'],
          ['id_user', 'idUser'],
          ['sex_user', 'sexUser'],
          ['role_user', 'roleUser'],
          ['name_user', 'nameUser'],
          ['email_user', 'emailUser'],
          ['telephone_user', 'numberPhone']
        ],
        offset: Number(req.query.page),
        limit: 2
      });
      return res.status(200).send({
        error: false,
        data: user
      });
    } else if (isNaN(req.query.page)) {
      return res.status(400).send({
        error: true,
        message: 'Veuillez renseigner le numero du page'
      });
    }

  } catch (error) {
    return res.status(500).send({ erreur: error });
  }
};
module.exports = getUser;
