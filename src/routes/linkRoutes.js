const express = require('express');
const {
  redirect,
  newLink,
  getAllLinks,
  deleteLink
} = require('../controllers/linkController.js');

const routes = express.Router();

routes.get('/all', getAllLinks)

routes.get('/:title', redirect);

routes.get('/', (_, res) => res.render('index'));

routes.post('/', newLink);

routes.delete('/:id', deleteLink)
routes.delete('/', deleteLink)

module.exports = routes;