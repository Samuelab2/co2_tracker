const store = require('./store')

const getTravels = () => {
  return store.list()
}

const addTravel = (date, start_address, end_address, transportation, km, number_workers, round_trip, total_CO2) => {
  if(!date || !start_address || !end_address || !transportation || !km || !number_workers) {
    console.error('[travel controller] Faltan datos por suministrar en el request')
    return 'Los datos son incorrectos'
  }

  const fullTravelData = {
    date,
    start_address,
    end_address,
    transportation,
    km,
    number_workers,
    round_trip,
    total_CO2
  }
  store.add(fullTravelData)
  return fullTravelData
}

module.exports = {
  addTravel,
  getTravels,
}