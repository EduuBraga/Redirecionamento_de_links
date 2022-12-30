const express = require('express');
const { redirect, newLink } = require('../controllers/linkController.js');

const routes = express.Router();

routes.get('/', (req, res) => res.render('index'));

routes.get('/:title', redirect);

routes.post('/', newLink);

module.exports = routes;