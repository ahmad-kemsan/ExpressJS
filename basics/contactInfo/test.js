const express = require('express')
const bodyParser = require('body-parser')
const app = express()

var contactsArr = [];

app.use((req, res, next) => {
    console.log("Time: ", Date.now())
    next()
})

app.use(bodyParser.json());

app.post('/basics/contactInfo', function (req, res) {
    let contact = req.body
    console.log(contact)
    contactsArr.push(contact)
    res.send("Contact info stored")
})

app.get('/basics/contactInfo', function (req, res) {
    res.send(contactsArr)
})

app.listen(3000, () => console.log("Listening to the port "))
