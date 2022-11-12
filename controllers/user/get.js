const { Users } = require('../../models');
const { myCache } = require('../../utils');

const getUser = async (req, res) => {
  try {
 
    if (myCache.has('userData')) {
      return res.status(200).send(myCache.get('userData'));
    } else {
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
        //  offset: Number(req.query.offset),
          // limit: Number(req.query.limit),
          // order: [['date', 'ASC']]
        });
        // response.error = false;
        // response.data = user;
        // response.nbrUser = countUser;

        myCache.set('stateData', user);

        return res.status(200).send(user);
      // } 
    }
  } catch (error) {
    return res.status(500).send({ erreur: error });
  }
};
module.exports = getUser;
