var router = require('express').Router();

router.use('/api/pet', require('./Pet.route'));

module.exports = router;