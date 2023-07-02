const express = require('express')
const router = express.Router()
const getAllProducts = require('../controllers/product')

router.route('/').get(getAllProducts).post()

module.exports = router