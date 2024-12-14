import { useState } from "react";
import "./Length.css";

const Length = () => {
  const [inputValue, setInputValue] = useState("");
  const [unitFrom, setUnitFrom] = useState("meter");
  const [unitTo, setUnitTo] = useState("kilometer");
  const [result, setResult] = useState("");

  const units = [
    "meter",
    "kilometer",
    "centimeter",
    "millimeter",
    "inch",
    "foot",
    "yard",
    "mile",
  ];

  const handleConvert = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/length/convert-length",
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

      const data = await response.json(); // Chuyển đổi JSON thành object JavaScript
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
    <div className="length">
      <h2>Length Converter</h2>
      <form onSubmit={handleConvert}>
        <p>Enter the length to convert</p>
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
            .filter((unit) => unit !== unitFrom) // Loại bỏ đơn vị đã chọn ở Unit from
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

export default Length;
