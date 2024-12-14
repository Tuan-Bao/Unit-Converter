const convertTemperature = (req, res) => {
  const { value, unitFrom, unitTo } = req.body;

  if (!value || isNaN(value)) {
    return res
      .status(400)
      .json({ success: false, error: "Invalid input value" });
  }

  try {
    const parsedValue = parseFloat(value);
    let convertedValue;

    if (unitFrom === "Celsius") {
      if (unitTo === "Fahrenheit") {
        convertedValue = (parsedValue * 9) / 5 + 32; // Celsius to Fahrenheit
      } else if (unitTo === "Kelvin") {
        convertedValue = parsedValue + 273.15; // Celsius to Kelvin
      } else {
        convertedValue = parsedValue; // Celsius to Celsius
      }
    } else if (unitFrom === "Fahrenheit") {
      if (unitTo === "Celsius") {
        convertedValue = ((parsedValue - 32) * 5) / 9; // Fahrenheit to Celsius
      } else if (unitTo === "Kelvin") {
        convertedValue = ((parsedValue - 32) * 5) / 9 + 273.15; // Fahrenheit to Kelvin
      } else {
        convertedValue = parsedValue; // Fahrenheit to Fahrenheit
      }
    } else if (unitFrom === "Kelvin") {
      if (unitTo === "Celsius") {
        convertedValue = parsedValue - 273.15; // Kelvin to Celsius
      } else if (unitTo === "Fahrenheit") {
        convertedValue = ((parsedValue - 273.15) * 9) / 5 + 32; // Kelvin to Fahrenheit
      } else {
        convertedValue = parsedValue; // Kelvin to Kelvin
      }
    }

    res.json({ success: true, result: convertedValue });
  } catch (error) {
    res.json({ success: false, error: "Internal server error" });
  }
};

module.exports = {
  convertTemperature,
};
