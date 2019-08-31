const mongoose = require('mongoose');
var PetModel = mongoose.model('pet');

module.exports = {
    Create: (pet) => {
        return PetModel.create(pet);
    },

    GetAll: () => {
        return PetModel.find();
    },

    GetOne: () => {
        return PetModel.findOne();
    },

    RemoveOne: () => {
        return PetModel.deleteOne();
    },

    RemoveMany: () => {
        return PetModel.deleteMany();
    },

    UpdateOne: () => {
        return PetModel.findOneAndUpdate();
    },

    UpdateMany: () => {
        return PetModel.updateMany();
    },

}
