const express = require("express");
require("dotenv").config();

const router = require('./src/routes/index');

const errorHandler = require('./src/middleware/errorHandler');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/', router);

app.set('views', './views');
app.set('view engine', 'ejs');

//app.use(express.static(__dirname + '/public'));

app.use( errorHandler );

module.exports = app;