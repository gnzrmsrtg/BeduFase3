const express = require('express')
const router = express.Router()

router.use('/products', require('./products'))
router.use('/reviews', require('./reviews'))
// router.use('/users', require('./users'))
// router.use('/orders', require('./orders'))

module.exports = router