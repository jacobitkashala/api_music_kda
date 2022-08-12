const { Users } = require('../../models');
const { myCache } = require('../../utils');

const getUser = async (req, res) => {
  try {
    const response = {
      error: true,
      data: '',
      nbrUser: ''
    };
    if (myCache.has('userData')) {
      return res.status(200).send(myCache.get('userData'));
    } else {
      if (!isNaN(req.query.page) && !isNaN(req.query.size)) {
        const countUser = await Users.count();
        const user = await Users.findAll({
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
          limit: Number(req.query.size)
        });
        response.error = false;
        response.data = user;
        response.nbrUser = countUser;

        myCache.set('stateData', response);

        return res.status(200).send(response);
      } else if (isNaN(req.query.page) || isNaN(req.query.size)) {
        return res.status(400).send({
          error: true,
          message: 'Veuillez renseigner le numero du page'
        });
      }
    }
  } catch (error) {
    return res.status(500).send({ erreur: error });
  }
};
module.exports = getUser;
