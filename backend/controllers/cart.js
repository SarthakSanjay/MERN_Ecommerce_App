
const cartDetails = async(req,res) =>{
    if(!cartItems){
        return res.status(404).json({msg: 'no items' ,total: cartItems.length})
    }
    

}
const addProductToCart = async(req,res) =>{

}
const removeProductFromCart = async(req,res) =>{

}

const checkout = async(req,res) =>{

}

module.exports = {
    cartDetails,
    addProductToCart,
    removeProductFromCart,
    checkout
}