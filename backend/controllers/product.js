const PRODUCT = require('../models/product')

const getAllProducts = async(req,res) =>{
     let data = await PRODUCT.find({})
     res.status(200).json({total:data.length , data : data})
    // res.send('hello')
}
const getSpecificProduct = async(req,res) => {
    
}
const createProduct = async( req,res) => {

}
const updateProduct = async(req,res) =>{

}
const deleteProduct = async(req,res) =>{
    
}
module.exports = getAllProducts