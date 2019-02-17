var router = require('express').Router();

router.use('/api/example', require('./example'));

module.exports = router;