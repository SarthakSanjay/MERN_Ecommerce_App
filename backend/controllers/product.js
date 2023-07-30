const PRODUCT = require('../models/product')
const ErrorHandler = require('../utils/errorHandler')

const getAllProducts = async(req,res) =>{
     let data = await PRODUCT.find({})
     res.status(200).json({total:data.length , data : data})
    // res.send('hello')
}
const getSpecificProduct = async(req,res,next) => {
    const productId = req.params.id;
  
    // Query the database to retrieve the product
    const product =await PRODUCT.findById(productId);
  
    if (!product) {
      // Handle case where product is not found
      // return res.status(404).json({ error: 'Product not found' });
      return next(new ErrorHandler("Product nhi mila", 404))
    }
  
    // Prepare and return the response
    res.status(200).json({product:product});
  }

  //admin functionality
const createProduct = async( req,res) => {
  let {productName, price, companyName, rating,image} = req.body
  // let productName = "sample product"
  // let  price = 1200
  // let companyName = "Apple"
  // let rating = 4.5
  console.log(req.body)
    const product =await PRODUCT.create({
        productName: productName ,
        price: price,
        companyName: companyName,
        rating: rating,
        image:image
    })
    if(!product){
        return res.status(200).json({msg:"product inserted successfully"})
    }
    res.status(200).json({
      msg:"success",
      product:product
    }) 
    
}
//admin functionality
const updateProduct = async (req, res) => {
  // try {
    // Find the product by ID
    let product = await PRODUCT.findById(req.params.id);

    // Check if the product exists
    if (!product) {
      return res.status(404).json({
        success: false,
        msg: "Product not found"
      });
    }
    product = await PRODUCT.updateOne({_id:req.params.id}, {productName:req.body.productName})
    .then((updatedProduct)=>{
      res.status(200).json({
        success: true,
        product: updatedProduct
      });
    })
    .catch(e=>console.log(e.message))
    console.log(req.params.id,req.body)
 
  // } catch (error) {
    // console.error("Error updating product:", error);
    // res.status(500).json({
    //   success: false,
    //   msg: "Internal server error"
    // });
  }
// };
//admin functionality
const deleteProduct = async(req,res) =>{
    try {
      let product = await PRODUCT.findById(req.params.id)
      console.log(req.params)
      if(!product){
        return res.status(404).json({success:false,msg:"product not found"})
      }
      await product.deleteOne()
      .then(()=>{
        console.log("product deleted")
      }).catch((e)=>{
        console.log(e.message)
      })
      res.status(200).json({msg:"product deleted"})
    } catch (error) {
      console.log(error.message)
    }
}
const deleteAllProduct = async(req,res) =>{
  await PRODUCT.deleteMany({})
  res.status(200).json({
    msg:"deleted all"
  })
}
module.exports ={ getAllProducts,createProduct,updateProduct,deleteProduct,getSpecificProduct,deleteAllProduct}