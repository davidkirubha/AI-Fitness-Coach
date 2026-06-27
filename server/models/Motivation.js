const mongoose = require("mongoose")

const motivationSchema = new mongoose.Schema({

  quote: String,

  createdAt: {

    type: Date,

    default: Date.now

  }

})

module.exports = mongoose.model(
  "Motivation",
  motivationSchema
)