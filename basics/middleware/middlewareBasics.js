const express = require('express')
const app = express()

app.use('/basics/middleware/',function(req,res,next){
    console.log('Starting the post request')
    next()
})

app.post('/basics/middleware', function(req,res,next){
    res.send('Storing the information')
    next()
})

app.use('/basics/middleware', function(req,res){
    console.log('Ending the post request')
})

app.listen(3000,function(){
    console.log('Server is running')
})