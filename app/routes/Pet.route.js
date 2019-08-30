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

// //Get one Pet by id
// router.get('/:id', (req, res, next) => {
//     Example.findOne({_id: req.params.id}, function (err, result) {
//       if (err) {
//         res.status(500).send(err);
//       } 
//       if(result) {
//         res.json(result);
//       } 
//       else {
//         res.send("No Example was found with this id!");
//       } 
//     });
// });

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