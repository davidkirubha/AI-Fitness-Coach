const express = require("express")

const router = express.Router()

const {

  addProgress,

  getProgress,

  clearProgress

} = require("../controllers/progressController")

router.post(
  "/",
  addProgress
)

router.get(
  "/",
  getProgress
)

router.delete(
  "/clear",
  clearProgress
)

module.exports = router