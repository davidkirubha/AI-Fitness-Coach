const Motivation = require("../models/Motivation")

const saveQuote = async (req, res) => {

  try {

    const quote = await Motivation.create({

      quote: req.body.quote

    })

    res.json(quote)

  }

  catch (error) {

    res.status(500).json({

      message: error.message

    })

  }

}

const getQuotes = async (req, res) => {

  try {

    const quotes = await Motivation.find()

    res.json(quotes)

  }

  catch (error) {

    res.status(500).json({

      message: error.message

    })

  }

}

const clearQuotes = async (req, res) => {

  try {

    await Motivation.deleteMany({})

    res.json({

      message: "All favorite quotes cleared"

    })

  }

  catch (error) {

    res.status(500).json({

      message: error.message

    })

  }

}

const deleteQuote = async (req, res) => {

  try {

    await Motivation.findByIdAndDelete(

      req.params.id

    )

    res.json({

      message: "Quote Deleted"

    })

  }

  catch (error) {

    res.status(500).json({

      message: error.message

    })

  }

}

module.exports = {

  saveQuote,

  getQuotes,

  clearQuotes,

  deleteQuote

}