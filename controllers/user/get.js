const { Users } = require('../../models');

const getUser = async (req, res) => {
  try {
    const responseUser = { id: '', idUser: '', nameUser: '',sex: '',mailUser: '', roleUser: '', numberPhoneUser: '' };
    const response = [];
    const user = await Users.findAll();
    console.log(user)
    user.forEach(user=>{

      responseUser.id=user.name_user;
      responseUser.sex=user.sex_user;
      responseUser.idUser=user.id_user;
      responseUser.nameUser=user.name_user;
      responseUser.roleUser=user.role_user;
      responseUser.mailUser=user.email_user;
      responseUser.numberPhoneUser=user.telephone_user;

      response.push(responseUser);
      
    })

    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).send({ erreur: error });
  }
};
module.exports = getUser;
