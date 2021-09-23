const { response } = require('express')
const express = require('express')
const serveIndex = require('serve-index')
const bodyParser = require('body-parser')

const app = express()

var contactsArr = []

app.use((req,res,next) => {
    console.log("Time: ",Date.now())
    next()
})

app.use(('/request-type'),(req,res,next) => {
    console.log("Request-type: ",req.method)
    res.send("hi I am working")
    next()

})

app.use('/public',express.static('public'))
app.use('/public',serveIndex('public'))

app.get('/',(req,res) => {
    res.send("server response")
})

app.post('/',(req,res) => {
    var contact = req.body
    console.log(contact)
    contactsArr.push(contact)
    res.send("Contact info stored")
})
app.listen(3000,() => console.log("Listening to the port "))
