const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
const lengthRoutes = require("./routes/lengthRoutes.js");
const weightRoutes = require("./routes/weightRoutes.js");
const temperatureRoutes = require("./routes/temperatureRoutes.js");

app.use("/api/length", lengthRoutes);
app.use("/api/weight", weightRoutes);
app.use("/api/temperature", temperatureRoutes);

module.exports = app;
