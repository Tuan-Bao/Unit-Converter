const conversions = {
  milligram: 1000000,
  gram: 1000,
  kilogram: 1,
  ounce: 35.273962,
  pound: 2.20462262,
};

const convertWeight = (req, res) => {
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
    const valueInKilograms = parseFloat(value) / conversions[unitFrom];
    const convertedValue = valueInKilograms * conversions[unitTo];
    res.json({ success: true, result: convertedValue });
  } catch (error) {
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

module.exports = {
  convertWeight,
};
