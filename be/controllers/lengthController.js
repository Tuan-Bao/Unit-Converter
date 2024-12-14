const conversions = {
  meter: 1,
  kilometer: 0.001,
  centimeter: 100,
  millimeter: 1000,
  inch: 39.3701,
  foot: 3.28084,
  yard: 1.09361,
  mile: 0.000621371,
};

const convertLength = (req, res) => {
  const { value, unitFrom, unitTo } = req.body;

  if (!value || isNaN(value)) {
    return res
      .status(400)
      .json({ success: false, error: "Invalid input value" });
  }

  if (!conversions[unitFrom] || !conversions[unitTo]) {
    return res
      .status(400)
      .json({ success: false, error: "Invalid units provided" });
  }
  try {
    const valueInMeters = parseFloat(value) / conversions[unitFrom];
    const convertedValue = valueInMeters * conversions[unitTo];
    res.json({ success: true, result: convertedValue });
  } catch (err) {
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

module.exports = {
  convertLength,
};
