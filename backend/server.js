require('dotenv').config()
const express = require('express')
const cors = require('cors')
// const connectDB = require('./db/connect')
const errorMiddleware = require('./middlewares/error')
const mongoose = require('mongoose')
const app = express()
const port = process.env.PORT || 3000
const Product_router = require('./routes/product')
app.use(cors())
app.use(express.json())
//middleware for error
app.use(errorMiddleware)
app.use('/product',Product_router)

app.post('/addProducts',(req,res) =>{
    console.log(req.body)
    res.send('success')
})

app.get('/hello',(req,res) =>{
    res.status(200).send("hello")
})

const start =  async() =>{
    try {
        await mongoose.connect(process.env.ECOMM)
        .then(()=> console.log("db connected"))
        .catch((e)=>console.log('error happened'))

        await app.listen(port , () => { 
            console.log(`server started at port ${port}`)
        })
    } catch (error) {
        console.log('something went wrong')
    }
}

start()