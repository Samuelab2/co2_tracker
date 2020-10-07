const express = require('express')
const router = express.Router()
const response = require('../../network/response')
const controller = require('./controller')

router.get('/', async (req, res) => {
  try {
    const data = await controller.getTravels()
    response.success(req, res, data, 200)
  } catch (e) {
    response.error(req, res, 'Hubo un error al intentar obtener la información', 400, e)
  }
})

router.post('/new', async (req, res) => { 
  try {
    const data = await controller.addTravel(req.body.date, req.body.start_address, req.body.end_address, req.body.transportation, req.body.km, req.body.number_workers, req.body.round_trip, req.body.total_CO2)
    response.success(req, res, data, 201)
  } catch (e) {
    response.error(req, res, 'Informacion invalida', 400, e)
  }
})

module.exports = router