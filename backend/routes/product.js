const express = require('express')
const router = express.Router()
const {getAllProducts,createProduct,updateProduct,deleteProduct} = require('../controllers/product')

router.route('/').get(getAllProducts).post()

router.route('/newProduct').post(createProduct)

router.route('/:id').put(updateProduct)

module.exports = router