const router = require('express').Router();

// ROUTERS
router.use('/users', require('./userRoute'));
router.use('/cards', require('./cardRoute'));

module.exports = router;