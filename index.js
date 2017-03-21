var express = require('express')
var cors = require('cors')
var openload = require('./openload')

var app = express()

app.use(cors())

app.get('/', function(req, res) {
  openload(req.query.url, function (url) {
    res.send(url)
  })
})

app.listen(5000)
