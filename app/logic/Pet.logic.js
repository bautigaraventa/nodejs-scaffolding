const PetRepository = require('./../repositories/Pet.repository');

module.exports = {
    Create: (pet) => {
        return PetRepository.Create(pet);
    },

    GetAll: () => {
        return PetRepository.GetAll();
    },

    GetByGender: (gender) => {
        return PetRepository.GetBy({gender});
    },

    RemoveOne: () => {
        return PetRepository.RemoveOne();
    },

    RemoveMany: () => {
        return PetRepository.RemoveMany();
    },

    UpdateOne: () => {
        return PetRepository.UpdateOne();
    },

    UpdateMany: () => {
        return PetRepository.UpdateMany();
    },
}
