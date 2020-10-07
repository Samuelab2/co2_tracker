const mongoose = require('mongoose')
const { connection } = mongoose
require('dotenv').config()

const uri = process.env.ATLAS_URI
mongoose.connect(uri, { 
  useNewUrlParser: true, 
  useCreateIndex: true,
  useUnifiedTopology: true,
  }
)

connection.once('open', () => {
  console.log("MongoDB database connection established successfully")
})
