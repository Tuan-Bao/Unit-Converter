const express = require("express");
const { convertLength } = require("../controllers/lengthController.js");

const router = express.Router();

router.post("/convert-length", convertLength);

module.exports = router;
