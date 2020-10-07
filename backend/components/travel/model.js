const mongoose = require('mongoose')
const { Schema, model } = mongoose
const Conveyance = require('../conveyance/model')

const travelSchema = new Schema({
  start_addres: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    minlength: 10
  },
  end_addres: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    minlength: 10
  },
  transportation: { 
    type: Schema.Types.ObjectId, 
    ref: Conveyance,
    required: true,
  },
  km: {
    type: Number,
    required: true,
  },
  number_workers: {
    type: Number,
    required: true,
    min: 1,
    trim: true,
  },
  round_trip: {
    type: Boolean,
    required: true,
    default: false
  },
})

const Travel = model('Travel', travelSchema)

module.exports = Travel