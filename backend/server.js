require('dotenv').config()
const express = require('express')
const connectDB = require('./db/connect')
const app = express()
const port = process.env.PORT || 3000
const Product_router = require('./routes/product')

app.use('/product',Product_router)

app.post('/addProducts',(req,res) =>{
    console.log(req.body)
    res.send('success')
})

const start =  async() =>{
    try {
        await connectDB()
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