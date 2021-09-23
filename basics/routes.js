// const { Router } = require('express')
const express = require('express')
const routes = express.Router()

var contactArr = []

routes.post("/contact",function (req,res){
    let contact = req.body
    console.log(contact)
    contactArr.push(contact)
    res.send("Contact info stored")
})

routes.get("/contact",function (req,res){
    res.send(contactArr)
})
module.exports = routes