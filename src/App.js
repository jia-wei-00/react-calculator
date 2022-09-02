import React, { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("0");

  const handleClick = (e) => {
    if (result === "0") {
      setResult(e.target.innerHTML);
    } else {
      setResult(result.concat(e.target.innerHTML));
    }
  };

  const clear = () => {
    setResult("0");
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
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
