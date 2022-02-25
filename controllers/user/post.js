const { Users } = require('../../models');

const postUser = async ( req, res) => {
  const { nameUser, passwordUser, numberPhoneUser, roleUser,emailUser   } =    req.body;
console.log(nameUser, passwordUser, numberPhoneUser, roleUser,emailUser)
  try {
    const User = await Users.create({
    name_user:nameUser,
    password_user:passwordUser,
    telephone_user:numberPhoneUser,
    role_user:roleUser,
    email_user:emailUser      
    });

    return res.status(200).send(User);
  } catch (error) {
    return res.status(401).send({ erreur: error });
  }
};
module.exports = postUser;
