const express = require("express");
const {
  convertTemperature,
} = require("../controllers/temperatureController.js");

const router = express.Router();
router.post("/convert-temperature", convertTemperature);

module.exports = router;
