const { Users } = require('../../models');
// const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');

const postUser = async (req, res) => {
  try {
    const { nameUser, passwordUser, numberPhoneUser, roleUser, emailUser } = req.body;

    // const users = await Users.findAll();

    // console.log(users);

    // const isUsersExiste = users.some(
    //   (value) =>
    //     value.name_user === nameUser &&
    //     value.email_user === emailUser
    // );
    // console.log(isUsersExiste);

    const passwordCrypt = bcrypt.hashSync(passwordUser, 10);

    const User = await Users.create({
      name_user: nameUser,
      password_user: passwordCrypt,
      telephone_user: numberPhoneUser,
      role_user: roleUser,
      email_user: emailUser
    });

    return res.status(200).send(User);
  } catch (error) {
    return res.status(401).send({ erreur: error });
  }
};
module.exports = postUser;
