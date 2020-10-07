const store = require('./store')

const getConveyance = () => {
  return store.list()
}

module.exports = {
  getConveyance,
}