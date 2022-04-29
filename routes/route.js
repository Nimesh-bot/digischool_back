const express = require('express')

const routes = express.Router()

const inquiry = require('../controllers/inquiry_cont')

routes.post('/inquiry', inquiry.inquiry)
routes.get('/', (req, res)=>{
    res.json({"Digischool": "Hello Nyan"})
})

module.exports = routes
