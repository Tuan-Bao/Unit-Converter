const express = require("express");
const { convertWeight } = require("../controllers/weightController.js");

const router = express.Router();
router.post("/convert-weight", convertWeight);

module.exports = router;
