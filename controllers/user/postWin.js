 const { Users } = require('../../models');
// const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');

const postUser = async (req, res) => {
  try {
    const { nameUser, passwordUser,etatUser, numberPhoneUser, roleUser, emailUser, sexUser } = req.body;

     const passwordCrypt = bcrypt.hashSync(passwordUser, 10);

   // console.log(nameUser, passwordUser, numberPhoneUser, roleUser, emailUser, sexUser );
    
    const newUser = await Users.create({
      sex_user: sexUser,
      name_user: nameUser,
      etat_user: etatUser,
      role_user: roleUser,
      email_user: emailUser,
      password_user: passwordCrypt,
      telephone_user: numberPhoneUser
    });
    
    return res.status(201).send(newUser);
  } catch (error) {
    return res.status(400).send({ erreur: error });
  }
};
module.exports = postUser;
