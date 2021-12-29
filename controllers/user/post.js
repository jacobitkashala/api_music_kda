const { Users } = require('../../models');

const postUser = async ( req, res) => {
  const { nameUser, passwordUser, telephoneUser, roleUser,emailUser   } =    req.body;

  try {
    const User = await Users.create({
    name_user:nameUser,
    password_user:passwordUser,
    telephone_user:telephoneUser,
    role_user:roleUser,
    email_user:emailUser      
    });

    return res.status(200).send(User);
  } catch (error) {
    return res.status(401).send({ erreur: error });
  }
};
module.exports = postUser;
