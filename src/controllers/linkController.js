const linkModel = require('../models/linkModel.js');

const redirect = async (req, res) => {
  const { title } = req.params;

  try {
    const doc = await linkModel.findOne({ title });
    res.send(doc);
  } catch (error) {
    res.send('<h1>Houve um error</h1>');
  }
}

module.exports = { redirect };