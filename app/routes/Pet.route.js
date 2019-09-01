const PetLogic = require('./../logic/Pet.logic');
var router = require('express').Router();

//Get all Pets
router.get('/', async (req, res) => {
    try {
        res.json(await PetLogic.GetAll());
    } catch (error) {
        res.send(error);
    }
});

//Get one Pet by id
router.get('/:gender', async (req, res) => {
    try {
        res.json(await PetLogic.GetByGender(req.params.gender));
    } catch (error) {
        res.send(error);
    }
});

//Create Pet
router.post('/', async (req, res) => {
    try {
        res.json(await PetLogic.Create(req.body));
    } catch (error) {
        res.send(error);
    }
});

// //Update Pet
// router.put('/:id', async (req, res) => {
//   Example.findOneAndUpdate({_id: req.params.id}, req.body).then(eee => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       console.log(eee);
//       res.send(eee);
//     }    
//   });  
// });

module.exports = router;