const mongoose = require('mongoose')

const connectDB = () =>{
    return mongoose.connect(process.env.ECOM)
}

module.exports = connectDB