const express = require('express');
const {
  redirect,
  newLink,
  getAllLinks,
  deleteLink,
  loadLink
} = require('../controllers/linkController.js');

const routes = express.Router();

routes.get('/', getAllLinks)
routes.get('/:title', redirect);
routes.get('/edit/:id', loadLink)

routes.post('/', newLink);

routes.delete('/:id', deleteLink)
routes.delete('/', deleteLink)

module.exports = routes;