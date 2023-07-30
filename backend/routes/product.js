const express = require('express')
const router = express.Router()
const {getAllProducts,createProduct,updateProduct,deleteProduct,getSpecificProduct,deleteAllProduct} = require('../controllers/product')

router.route('/').get(getAllProducts).post().delete(deleteAllProduct)

router.route('/newProduct').post(createProduct)

router.route('/:id').patch(updateProduct).delete(deleteProduct).get(getSpecificProduct)

// router.route('/:id')
module.exports = router