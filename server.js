var express = require('express');
var mongoose = require('mongoose');
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

require('./app/models/Pet.model');

app.use(require('./app/routes'));

mongoose.connect('mongodb://localhost:27017/vet', { useNewUrlParser: true });

app.listen(PORT, () => {
  console.log('We are live on ' + PORT);
});