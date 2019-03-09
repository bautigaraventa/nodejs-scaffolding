var express = require('express');
// var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var methodOverride = require('method-override');

const PORT = 3000;

var app = express();
var router = express.Router();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());


app.use(router);

app.use(require('./app/routes'));

// See if it's possible to import a single index.js that exports all the models (like routes)
// require('./app/models/example.js');


//mongoose.connect('mongodb://localhost/example', { useNewUrlParser: true });

app.listen(PORT, () => {
  console.log('We are live on ' + PORT);
});