const express = require('express')
const router = express.Router()
const response = require('../../network/response')
const controller = require('./controller')

router.get('/', function (req, res) {
  res.send('main app')
})

router.post('/new', function (req, res) {
  res.send('create app')
})

module.exports = router