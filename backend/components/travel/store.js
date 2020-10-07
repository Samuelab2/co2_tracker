const Model = require('./model')

const getTravel = async () => {
  const data = await Model.find({}).populate('transportation').exec()
  return data
}

const addTravel = data => {
  const myTravel = new Model(data)
  myTravel.save()
}

// async function updateText(id, message) {
//   const foundMessage = await Model.findOne({
//     _id: id
//   })
//   foundMessage.message = message
//   const newMessage = await foundMessage.save()
//   return newMessage
// }

// function removeMessage(id) {
//   return Model.deleteOne({
//     _id: id
//   })
// }

module.exports = {
  add: addTravel,
  list: getTravel,
  // updateText: updateText,
  // remove: removeMessage
}