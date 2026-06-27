const express = require("express")

const router = express.Router()

const {

  saveQuote,

  getQuotes,

  clearQuotes,

  deleteQuote

} = require("../controllers/motivationController")

router.post(
  "/save",
  saveQuote
)

router.get(
  "/",
  getQuotes
)

router.delete(
  "/clear",
  clearQuotes
)

router.delete(
  "/:id",
  deleteQuote
)

module.exports = router