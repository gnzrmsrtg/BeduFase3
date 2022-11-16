const express = require('express')
const router = express.Router()
const autores = require('./autores')

router.use('/autores', autores)
// router.use('/contenido', require('./contenido'))

module.exports = router