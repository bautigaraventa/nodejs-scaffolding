// // var mongoose = require('mongoose');
// var Example = mongoose.model('example');
// var router = require('express').Router();

// //Get all Examples
// router.get('/', (req, res, next) => {
//   Example.find((err, result) => {
//     if (err) {
//       res.status(500).send(err);
//     }
//     else if (result.length != 0) {
//       res.json(result);
//     }
//     else {
//       res.send("No Example was found!");
//     }
//   });
// });

// //Get one Example by id
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

// //Create Example
// router.post('/', (req, res) => {
//   const example = new Example({
//     name: req.body.name,
//     year: req.body.year
//   });
//   example.save((err) => {
//     if (err) {
//       res.status(500).send(err);
//     } 
//     else {
//       res.send(example);
//     }
//   });
// });

// //Update Example
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

// module.exports = router;