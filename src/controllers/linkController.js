const linkModel = require('../models/linkModel.js');

const redirect = async (req, res) => {
  const { title } = req.params;

  try {
    const doc = await linkModel.findOneAndUpdate({title}, {$inc: {clicks: 1}});
    res.redirect(doc.url);
  } catch (error) {
    res.send('<h1 style="text-align:center;">Página não encontrada</h1>');
  }
};

const newLink = async (req, res) => {
  const linkDoc = new linkModel(req.body);

  try {
    await linkDoc.save();
    res.redirect('/');
  } catch (error) {
    res.send(`Error: <h1>${error.message}<h1>`);
  }
};

const getAllLinks = async (_, res) => {
  try {
    const allLinks = await linkModel.find({});
    res.render('index', { allLinks });
  } catch (error) {
    res.send(`Error: <h1>${error.message}<h1>`);
  }
};

const deleteLink = async (req, res) => {
  const id = req.params.id || req.body.id;

  try {
    await linkModel.deleteOne({ _id: id });
    res.send(id);
  } catch (error) {
    res.status(404).send(error);
  }
};

const loadLink = async (req, res) => {
  const { id } = req.params;

  try {
    const linkDoc = await linkModel.findOne({ _id: id });
    res.render('edit', { linkDoc });
  } catch (error) {
    res.redirect('/');
  }
};

const editLink = async (req, res) => {
  const { id } = req.params;
  const { title, description, url } = req.body;

  const linkUpdate = { title, description, url };

  try {
    await linkModel.findOneAndUpdate({id}, linkUpdate);
    res.redirect('/');
  } catch (error) {
    res.redirect('/');
  }
};

module.exports = {
  redirect,
  newLink,
  getAllLinks,
  deleteLink,
  loadLink,
  editLink
};