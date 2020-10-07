const mongoose = require('mongoose')
const { Schema, model } = mongoose

const conveyanceSchema = new Schema({
  transportation: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  emission_factor: {
    type: Number,
    required: true,
  }
})

const Conveyance = model('Conveyance', conveyanceSchema, 'conveyances')

module.exports = Conveyance