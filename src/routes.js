const { Router } = require('express');

const routes = Router();

routes.get('/', (req, res) => {
  res.json('{"name": "dudu"}');
});

module.exports = routes;