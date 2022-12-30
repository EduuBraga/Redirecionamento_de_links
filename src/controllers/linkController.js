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

const getAllLinks = async (_, res) => {
  try {
    const allLinks = await linkModel.find({});
    res.render('all', { allLinks });
  } catch (error) {
    res.send(`Error: <h1>${error.message}<h1>`);
  }
};

const deleteLink = async (req, res) => {
  const id = req.params.id || req.body.id

  try {
    res.send(await linkModel.deleteOne({_id: id}))
  } catch (error) {
    res.send(error)
  }
}

module.exports = { redirect, newLink, getAllLinks, deleteLink };