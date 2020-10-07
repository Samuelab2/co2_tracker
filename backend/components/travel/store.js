const Model = require('./model')

const getTravel = async () => {
  const data = await Model.find({}).populate('transportation').exec()
  return data
}

const addTravel = data => {
  const myTravel = new Model(data)
  myTravel.save()
}

module.exports = {
  add: addTravel,
  list: getTravel,
}