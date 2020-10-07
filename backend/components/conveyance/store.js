const Model = require('./model')

const getConveyance = async () => {
  const data = await Model.find({})
  return data
}

module.exports = {
  list: getConveyance,
}