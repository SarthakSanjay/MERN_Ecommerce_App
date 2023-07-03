const PRODUCT = require('../models/product')

const getAllProducts = async(req,res) =>{
     let data = await PRODUCT.find({})
     res.status(200).json({total:data.length , data : data})
    // res.send('hello')
}
const getSpecificProduct = async(req,res) => {
    const productId = req.params.productId;
  
    // Query the database to retrieve the product
    const product = PRODUCT.findById(productId);
  
    if (!product) {
      // Handle case where product is not found
      return res.status(404).json({ error: 'Product not found' });
    }
  
    // Prepare and return the response
    res.json(product);
  }
const createProduct = async( req,res) => {
    const product = PRODUCT.create({
        productName: productName ,
        price: price,
        companyName: companyName,
        rating: rating
    })
    if(!product){
        return res.status(200).json({msg:"product inserted successfully"})
    }
    res.json(product)
}
const updateProduct = async(req,res) =>{

}
const deleteProduct = async(req,res) =>{
    
}
module.exports = getAllProducts