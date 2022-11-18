const { Users } = require('../../models');
// const { Users, Album, Songs } = require('../../models');
// const { Op } = require('sequelize');

const update = async (req, res) => {
  const { uuid } = req.params;
  const {
    nameUser,
    etatUser,
    passwordUser,
    numberPhoneUser,
    roleUser,
    emailUser,
    sexUser
  } = req.body;
  const dataResponse = {};
  // let userUpdate;
  try {
    // io send grid

    if (
      nameUser === undefined &&
      etatUser === undefined &&
      passwordUser === undefined &&
      numberPhoneUser === undefined &&
      roleUser === undefined &&
      emailUser === undefined &&
      sexUser === undefined
    ) {
      dataResponse.erreur = false;
      dataResponse.message = 'Mettez le bon parametre';
      return res.status(200).send({ dataResponse });
    } else {
      
      await Users.update(
        {
          sex_user: sexUser===""?undefined:sexUser,
          name_user: nameUser===""?undefined:nameUser,
          etat_user: etatUser===""?undefined:etatUser,
          role_user: roleUser===""?undefined:roleUser,
          email_user: emailUser===""?undefined:emailUser,
          telephone_user: numberPhoneUser===""?undefined:numberPhoneUser
        },
        {
          where: { id_user: uuid }
        }
      );

      dataResponse.erreur = false;
      dataResponse.message = 'Mise à jour effectuée avec succès';
      return res.status(200).send(dataResponse);
    }
  } catch (error) {
    dataResponse.erreur = true;
    dataResponse.message = error;
    return res.status(500).send({ dataResponse });
  }
};
module.exports = update;
