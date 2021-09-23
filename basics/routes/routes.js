const express = require('express')
const router = express.Router()

router.post('/', function(req,res){
    res.send('Information has been stored')
})

router.get('/', function(req,res){
    res.send('Here is your requested data')
})

module.exports = router
