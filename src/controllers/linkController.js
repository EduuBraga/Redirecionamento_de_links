const linkModel = require('../models/linkModel.js');

const redirect = async (req, res) => {
  const { title } = req.params;

  try {
    const doc = await linkModel.findOne({ title });
    res.send(doc);
  } catch (error) {
    res.send('<h1>Houve um error</h1>');
  }
};

const newLink = async (req, res) => {
  const linkDoc = new linkModel(req.body);

  try {
    await linkDoc.save();
    res.send("<h1>Link adicionado com sucesso!<h1>");
  } catch (error) {
    res.send(`Error: <h1>${error.message}<h1>`);
  }
};

module.exports = { redirect, newLink };