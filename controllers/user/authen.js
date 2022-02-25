const { Users } = require('../../models');
const { compare } = require('bcrypt');
const jwt = require('jsonwebtoken');

const authenticate = async (req, res) => {
  const { passwordUser, emailUser } = req.body;

  try {
    const userWithEmail = await Users.findOne({ where: { email_user: emailUser } });

    const isPasswordValid = await compare(passwordUser, userWithEmail.password_user);

    console.log(userWithEmail);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "L'utlisateur n'existe pas" });
    }

    if (!userWithEmail && !isPasswordValid) {
      return res.status(400).json({ message: 'Email and password does not valid' });
    } else if (userWithEmail && !isPasswordValid) {
      return res.status(400).json({ message: 'Password not valid' });
    } else if (!userWithEmail && isPasswordValid) {
      return res.status(400).json({ message: 'Email not valid' });
    } else {
      const jwtToken = jwt.sign(
        { id: userWithEmail.id, email: userWithEmail.email },
        process.env.JWT_SECRET
      );
      res.status(200).json({
        message: 'Welcome Back!',
        token: jwtToken,
        name: `${userWithEmail.nom_user} ${userWithEmail.prenom_user}`,
        role: ` ${userWithEmail.role_user}`,
        id_user: `${userWithEmail.id_user}`,
        status: `${userWithEmail.statut}`
      });
    }
  } catch (error) {
    return res.status(401).send({ erreur: error });
  }
};
module.exports = authenticate;
