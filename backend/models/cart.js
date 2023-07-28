const mongoose = require('mongoose')

const cartItemSchema = new mongoose.Schema({
    product:{
        type: String,
        ref: 'Product',
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
        ref: 'Users',
        required: true
    },
    items:[cartItemSchema]
})

module.exports = {cartItemSchema , cartSchema}