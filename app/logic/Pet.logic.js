// const PetModel = require('./../models/Pet.model');
const mongoose = require('mongoose');
var PetModel = mongoose.model('pet');

module.exports = {
    Create: (pet) => {
        return PetModel.create(pet);
    },

    GetAll: () => {
        return PetModel.find();
    }
}
