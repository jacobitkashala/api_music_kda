const { Users, sequelize } = require('../../models');
// const {  sequelize } = require('../../models');
 const { compare } = require('bcrypt');
 const jwt = require('jsonwebtoken');

const authenticate = async (req, res) => {
  const { passwordUser, emailUser } = req.body;
  // console.log(passwordUser, emailUser) 
  
  try {
   // return res.status(401).send({ erreur: "ddd" });
    
    sequelize.transaction(async (t) => {
      const userWithEmail = await Users.findOne({ where: { email_user: emailUser } });

      const isPasswordValid = await compare(passwordUser, userWithEmail.password_user);

       // console.log(passwordUser, emailUser,userWithEmail);
      // console.log(userWithEmail, passwordUser);
     //  return res.status(401).send({ message: "L'utlisateur n'existe pas" });
      
       if (!isPasswordValid) {
       return res.status(401).send({ message: "L'utlisateur n'existe pas" });
       }
       if (!userWithEmail && !isPasswordValid) {
         return res.status(400).send({ message: 'Email and password does not valid' });
      } else if (userWithEmail && !isPasswordValid) {
        return res.status(400).send({ message: 'Password not valid' });
      } else if (!userWithEmail && isPasswordValid) {
        return res.status(400).send({ message: 'Email not valid' });
      } else {
        const jwtToken = jwt.sign(
          { id: userWithEmail.id, email: userWithEmail.email_user, expiresIn: '1h' },
          process.env.JWT_SECRET
        );
        res.status(200).send({
          data: {
            message: 'Welcome Back!',
            token: jwtToken,
            name: `${userWithEmail.name_user}`,
            role: ` ${userWithEmail.role_user}`,
            id_user: `${userWithEmail.id_user}`
          }
        });
      }
   });
     
  } catch (error) {
    return res.status(401).send({ erreur: error });
  }
};
module.exports = authenticate;
