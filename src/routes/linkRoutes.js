const { Router } = require('express');
const { redirect } = require('../controllers/linkController.js');

const routes = Router();

routes.get('/', (req, res) => {
  res.json("<h1>Hello world</h1>");
});

routes.get('/:title', redirect);

module.exports = routes;