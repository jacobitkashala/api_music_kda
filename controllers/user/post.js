const { Users } = require('../../models');
// const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');

const postUser = async (req, res) => {
  try {
    const {
      nameUser,
      etatUser,
      passwordUser,
      numberPhoneUser,
      roleUser,
      emailUser,
      sexUser
    } = req.body;

    const passwordCrypt = bcrypt.hashSync(passwordUser, 10);
    const userFind = await Users.findOne({
      where: {
        sex_user: sexUser,
        name_user: nameUser,
        etat_user: etatUser,
        role_user: roleUser,
        email_user: emailUser,
        telephone_user: numberPhoneUser
      }
    });
    const userEmail = await Users.findOne({
      where: {
        email_user: emailUser
      }
    });
    if (userEmail) {
      return res
        .status(400)
        .send({ erreur: "L'adresse e-mail existe veuillez changer l'informations" });
    }
    if (userFind) {
      return res
        .status(400)
        .send({ erreur: 'La personne existe veuillez changer les informations' });
    } else {
      // console.log(' no existing');
      const newUser = await Users.create({
        sex_user: sexUser,
        name_user: nameUser,
        role_user: roleUser,
        etat_user: etatUser,
        email_user: emailUser,
        password_user: passwordCrypt,
        telephone_user: numberPhoneUser,
      });
      return res.status(201).send(newUser);
    }
  } catch (error) {
    return res.status(400).send({ erreur: error });
  }
};
module.exports = postUser;
