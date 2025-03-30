const express = require('express');
const app = express();
require('dotenv').config();
const routes = require('./routes/index')

// db connection

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODBURL)
.then(() => {
    console.info('connection successfull')
})
.catch((err) => {
    console.error('error in connecting to mongodb')
})


//middleware
app.use(express.json())
app.use('/', routes)
app.use((err, req, res, next) => {
    console.log(err);
    return res.send({success: false, err: err})
})

//process error
process.on("uncaughtException", (err) => {
    console.log('Exception:', err)
}) 

process.on('unhandledRejection', (err) => {
    console.log("Rejection:", err)
})




//server 
app.listen(3000, () => {
    console.log('server running on port', 3000)
})