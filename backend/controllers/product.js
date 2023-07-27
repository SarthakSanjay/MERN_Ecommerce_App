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
  let productName = "sample product"
  let  price = 1200
  let companyName = "Apple"
  let rating = 4.5
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
const updateProduct = async (req, res) => {
  try {
    // Find the product by ID
    let product = await PRODUCT.findById(req.params.id);

    // Check if the product exists
    if (!product) {
      return res.status(404).json({
        success: false,
        msg: "Product not found"
      });
    }
    product = await PRODUCT.findByIdAndUpdate(req.params.id, req.body,{
      new:true,
      runValidators:true,
      useFindAndModify:false
    })
    res.status(200).json({
      success: true,
      product: product
    });
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({
      success: false,
      msg: "Internal server error"
    });
  }
};
const deleteProduct = async(req,res) =>{
    
}
module.exports ={ getAllProducts,createProduct,updateProduct,deleteProduct}