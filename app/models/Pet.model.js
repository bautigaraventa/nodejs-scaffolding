var mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: {type: String, required: true},
  animal: {type: String},
  gender: {type: String},
});

mongoose.model('pet', petSchema);