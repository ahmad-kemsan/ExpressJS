const express = require('express')
const app = express()

const router = require('./routes.js')
app.use('/basics/routes',router)

app.listen(3000,function(){
    console.log('server is Running')
})