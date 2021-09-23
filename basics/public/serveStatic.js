
// If you want to serva a file mention root folder in exprees.static and 
// then use the url to server that file but remember do not mention root folder in the url


const express = require('express')
const app = express()

app.use(express.static('basics'))

app.listen(3000,function(){
    console.log('server is running')
})