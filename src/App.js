import React, { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("0");
  const [reset, setReset] = useState(false);

  const handleClick = (e) => {
    let value = e.target.innerHTML;
    let checkValue = result.slice(-1);

    if (reset === true) {
      if (value === "+" || value === "-" || value === "*" || value === "/") {
        setResult(result.concat(value));
        setReset(false);
      } else {
        setResult(value);
        setReset(false);
      }
    } else if (result === "0") {
      if (value === "/" || value === "*" || value === "+") {
        setResult("0");
      } else {
        setResult(value);
      }
    } else if (
      (checkValue === "+" ||
        checkValue === "-" ||
        checkValue === "*" ||
        checkValue === "/") &&
      (value === "+" || value === "-" || value === "*" || value === "/")
    ) {
      setResult(result.slice(0, -1) + value);
    } else {
      setResult(result.concat(value));
    }
  };

  const clear = () => {
    setResult("0");
    setReset(false);
  };

  const calculate = () => {
    try {
      setReset(true);
      setResult(eval(result).toString());
    } catch (error) {
      setReset(false);
    }
  };

  return (
    <div className="calculator">
      <div className="buttons">
        <h2 id="value">{result}</h2>
        <span onClick={clear} id="clear">
          Clear
        </span>
        <span onClick={handleClick}>/</span>
        <span onClick={handleClick}>*</span>
        <span onClick={handleClick}>7</span>
        <span onClick={handleClick}>8</span>
        <span onClick={handleClick}>9</span>
        <span onClick={handleClick}>-</span>
        <span onClick={handleClick}>4</span>
        <span onClick={handleClick}>5</span>
        <span onClick={handleClick}>6</span>
        <span onClick={handleClick} id="plus">
          +
        </span>
        <span onClick={handleClick}>1</span>
        <span onClick={handleClick}>2</span>
        <span onClick={handleClick}>3</span>
        <span onClick={handleClick}>0</span>
        <span onClick={handleClick}>00</span>
        <span onClick={handleClick}>.</span>
        <span onClick={calculate} id="equal">
          =
        </span>
      </div>
    </div>
  );
}

export default App;
