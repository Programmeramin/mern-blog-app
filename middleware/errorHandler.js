

// error handler function
 const errorHandler = async(error, req, res, next) =>{

    const statusCode = res.statusCode ? res.statusCode : 500;

    res.status(statusCode).json({message : error.message})



}

// export default
export default errorHandler;