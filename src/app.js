const express = require('express');
const path = require('path');
const routes = require('./routes/linkRoutes.js');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use("/", routes);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

module.exports = app;