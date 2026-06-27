const mongoose = require("mongoose")

const progressSchema = new mongoose.Schema({

  exercise: String,

  targetReps: Number,

  completedReps: Number,

  caloriesBurned: Number,

  date: String

})

module.exports = mongoose.model(
  "Progress",
  progressSchema
)