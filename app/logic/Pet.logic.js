const PetRepository = require('./../repositories/Pet.repository');

module.exports = {
    Create: (pet) => {
        return PetRepository.Create(pet);
    },

    GetAll: () => {
        return PetRepository.GetAll();
    }
}
