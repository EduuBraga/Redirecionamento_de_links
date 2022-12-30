const express = require('express');
const {
  redirect,
  newLink,
  getAllLinks,
  deleteLink
} = require('../controllers/linkController.js');

const routes = express.Router();

routes.get('/', getAllLinks)

routes.get('/add', (_, res) => res.render('add'));

routes.get('/:title', redirect);

routes.post('/', newLink);

routes.delete('/:id', deleteLink)
routes.delete('/', deleteLink)

module.exports = routes;