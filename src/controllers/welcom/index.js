const welcom = (req, res) => {
  return res.status(200).send({ message: 'bienvenue' });
};
module.exports = welcom;
