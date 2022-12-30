const express = require('express');
const routes = require('./routes/linkRoutes.js');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use("/", routes);

module.exports = app;