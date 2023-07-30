const ErrorHandler = require('../utils/errorHandler')

module.exports = (err,res,req,next) =>{
    err.statusCode = err.statusCode || 500
    err.message = err.message || 'Internal sever errror'

    res.status(err.statusCode).json({
        success:false,
        error:err,
    })
}