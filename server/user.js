const express = require('express')
const Router = express.Router()

Router.get('/info', function(req, resp){
    return resp.json({code: 0})
})

Router.get('/register', function(req, resp){
    return resp.json({code: 0})
})

module.exports = Router