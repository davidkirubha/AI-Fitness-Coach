const Progress = require("../models/Progress")

const addProgress = async (req, res) => {

  try {

    const progress = await Progress.create(
      req.body
    )

    res.json(progress)

  }

  catch (error) {

    res.status(500).json({
      message: error.message
    })

  }

}

const getProgress = async (req, res) => {

  try {

    const data = await Progress.find()

    res.json(data)

  }

  catch (error) {

    res.status(500).json({
      message: error.message
    })

  }

}

const clearProgress = async (req, res) => {

  try {

    await Progress.deleteMany({})

    res.json({
      message: "History Cleared"
    })

  }

  catch (error) {

    res.status(500).json({
      message: error.message
    })

  }

}

module.exports = {

  addProgress,

  getProgress,

  clearProgress

}