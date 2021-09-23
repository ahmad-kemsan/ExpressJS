const express = require('express')
const app = express()

app.get('/basics/params/:id([0-9]{5})/:name', function (req, res) {
    res.send('The first parameter is: ' + req.params.id + ' The second parameter is: ' + req.params.name)
})
app.get('*', function (req, res) {
    res.send('Please check your API')
})
app.listen(3000, function () {
    console.log("Server is listening")
})