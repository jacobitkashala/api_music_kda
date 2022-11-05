const { Users } = require('../../models');
// const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');

const postUser = async (req, res) => {
  const dataResponse = {};
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
      dataResponse.error = true;
      dataResponse.message = "L'adresse e-mail existe veuillez changer l'informations";
      return res.status(400).send({ dataResponse });
    }
    if (userFind) {
      dataResponse.error = true;
      dataResponse.message = 'La personne existe veuillez changer les informations';
      return res.status(400).send({ dataResponse });
    } else {
      // console.log(' no existing');
      await Users.create({
        sex_user: sexUser,
        name_user: nameUser,
        role_user: roleUser,
        etat_user: etatUser,
        email_user: emailUser,
        password_user: passwordCrypt,
        telephone_user: numberPhoneUser
      });
      dataResponse.error = false;
      dataResponse.message = "L'utilisateur a été créer avec succès.";

      return res.status(201).send({ dataResponse });
    }
  } catch (error) {
    return res.status(400).send({ erreur: error });
  }
};
module.exports = postUser;
