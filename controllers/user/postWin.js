 const { Users } = require('../../models');
// const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');

const postUser = async (req, res) => {
  try {
    const { nameUser, passwordUser, numberPhoneUser, roleUser, emailUser, sexUser } = req.body;

     const passwordCrypt = bcrypt.hashSync(passwordUser, 10);

   // console.log(nameUser, passwordUser, numberPhoneUser, roleUser, emailUser, sexUser );
    
    const newUser = await Users.create({
      name_user: nameUser,
      password_user: passwordCrypt,
      telephone_user: numberPhoneUser,
      role_user: roleUser,
      email_user: emailUser,
      sex_user: sexUser
    });
    
    return res.status(201).send(newUser);
  } catch (error) {
    return res.status(400).send({ erreur: error });
  }
};
module.exports = postUser;
