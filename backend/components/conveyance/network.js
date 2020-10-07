const express = require('express')
const router = express.Router()
const response = require('../../network/response')
const controller = require('./controller')

router.get('/', async (req, res) => {
  try {
    const data = await controller.getConveyance()
    response.success(req, res, data, 200)
  } catch (e) {
    response.error(req, res, 'Hubo un error al intentar obtener la información', 400, e)
  }
})

module.exports = router