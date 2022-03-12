const welcom = (req, res) => {
  return res.status(200).send({ message: 'bienvenue API musik 😃 ' });
};
module.exports = welcom;
