import { useState } from "react";
import "./Weight.css";

const Weight = () => {
  const [inputValue, setInputValue] = useState("");
  const [unitFrom, setUnitFrom] = useState("milligram");
  const [unitTo, setUnitTo] = useState("gram");
  const [result, setResult] = useState("");

  const units = ["milligram", "gram", "kilogram", "ounce", "pound"];

  const handleConvert = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/weight/convert-weight",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            value: inputValue,
            unitFrom,
            unitTo,
          }),
        }
      );

      const data = await response.json();
      if (data.success) {
        setResult(data.result);
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="weight">
      <h2>Weight Converter</h2>
      <form onSubmit={handleConvert}>
        <p>Enter the weight to convert</p>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            setResult("");
          }}
          placeholder="Enter value"
        />
        <p>Unit to convert from</p>
        <select value={unitFrom} onChange={(e) => setUnitFrom(e.target.value)}>
          {units.map((unit) => (
            <option key={unit} value={unit}>
              {unit.charAt(0).toUpperCase() + unit.slice(1)}
            </option>
          ))}
        </select>
        <p>Unit to convert to</p>
        <select value={unitTo} onChange={(e) => setUnitTo(e.target.value)}>
          {units
            .filter((unit) => unit !== unitFrom)
            .map((unit) => (
              <option key={unit} value={unit}>
                {unit.charAt(0).toUpperCase() + unit.slice(1)}
              </option>
            ))}
        </select>
        <button type="submit">Convert</button>
      </form>
      {result && (
        <p className="result">
          Result: {inputValue} {unitFrom} = {result} {unitTo}
        </p>
      )}
    </div>
  );
};

export default Weight;
