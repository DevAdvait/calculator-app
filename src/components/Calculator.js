import React, { useState } from "react";
import Button from "./Button";
import "../App.css";

const Calculator = () => {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const handleClear = () => {
    setResult("");
  };

  const handleDelete = () => {
    setResult(result.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="result">{result}</div>
      <Button handleClick={handleClick} name="/" className="operation" />

      <Button handleClick={handleDelete} name="DEL" className="DEL" />
      <Button handleClick={handleClear} name="AC" className="AC" />
      <Button handleClick={handleClick} name="*" className="operation" />
      <Button handleClick={handleClick} name="7" />
      <Button handleClick={handleClick} name="8" />
      <Button handleClick={handleClick} name="9" />
      <Button handleClick={handleClick} name="-" className="operation" />
      <Button handleClick={handleClick} name="4" />
      <Button handleClick={handleClick} name="5" />
      <Button handleClick={handleClick} name="6" />
      <Button handleClick={handleClick} name="+" className="operation" />
      <Button handleClick={handleClick} name="1" />
      <Button handleClick={handleClick} name="2" />
      <Button handleClick={handleClick} name="3" />
      <Button handleClick={handleCalculate} name="=" className="equal" />
      <Button handleClick={handleClick} name="0" />
      <Button handleClick={handleClick} name="." />
    </div>
  );
};

export default Calculator;
