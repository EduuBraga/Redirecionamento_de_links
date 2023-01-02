const express = require('express');
const {
  redirect,
  newLink,
  getAllLinks,
  deleteLink,
  loadLink,
  editLink
} = require('../controllers/linkController.js');

const routes = express.Router();

routes.get('/', getAllLinks)
routes.get('/:title', redirect);
routes.get('/edit/:id', loadLink);

routes.post('/', newLink);
routes.post('/edit/:id', editLink);

routes.delete('/:id', deleteLink);
routes.delete('/', deleteLink);

module.exports = routes;