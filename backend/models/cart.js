const mongoose = require('mongoose')

const cartItemSchema = new mongoose.Schema({
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PRODUCT',
        required:true
    },
    quantity:{
        type:Number,
        required:true,
        min:1,
    }
})

const cartSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'USERS',
        required: true
    },
    items:[cartItemSchema]
})

cartItemSchema.methods.calculateTotalAmount = () =>{
    let total = 0
    this.items.forEach((cartItem)=>{
        const subtotal = cartItem.product.price * cartItem.quantity
        total += subtotal
    })
    return total
}



module.exports = new mongoose.model("CART" ,cartSchema)
module.exports = new mongoose.model("CARTITEMS" ,cartItemSchema)