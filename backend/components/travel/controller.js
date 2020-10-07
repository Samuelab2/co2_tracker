const store = require('./store')

const getTravels = () => {
  return store.list()
}

const addTravel = (start_addres, end_addres, transportation, km, number_workers, round_trip) => {
  if(!start_addres || !end_addres || !transportation || !km || !number_workers) {
    console.error('[travel controller] Faltan datos por suministrar en el request')
    return 'Los datos son incorrectos'
  }

  const fullTravelData = {
    start_addres,
    end_addres,
    transportation,
    km,
    number_workers,
    round_trip
  }
  store.add(fullTravelData)
  return fullTravelData
}


// function updateMessage(id, message) {
//   return new Promise(async (resolve, reject) => {
//     if (!id || !message) {
//       reject('Invalid data')
//       return false
//     }
//     const result = await store.updateText(id, message)
//     resolve(result)
//   })
// }

// function deleteMessage(id) {
//   return new Promise((resolve, reject) => {
//     if (!id) {
//       reject('Id invalido')
//       return false
//     }
//     store.remove(id)
//       .then(() => {
//         resolve()
//       })
//       .catch(e => {
//         reject(e)
//       })
//   })
// }

module.exports = {
  addTravel,
  getTravels,
  // updateMessage,
  // deleteMessage,
}