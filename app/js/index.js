import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../scss/styles.scss";
import Header from "./components/header";
import InputButton from "./components/inputButton";
import Button from "./components/button";

function App() {
  const [number, setNumber] = useState();
  const [result, setResult] = useState(0);

  const calculatorBtnKeys = [
    7,
    8,
    9,
    "DEL",
    4,
    5,
    6,
    "+",
    1,
    2,
    3,
    "-",
    ".",
    0,
    "/",
    "*",
  ];

  // function handelKeyClick() {
  //   console.log("Calculator keys is clicked");
  // }

  // function handelChange(event) {
  //   this.setNumber({ number: event.target.value });
  // }

  return (
    <form className="calc">
      <Header />
      <div className="calc-display">
        <InputButton type="text" value={number} />
      </div>

      <div className="calc-input">
        {calculatorBtnKeys.map((btnKey, index) => (
          <Button
            key={index}
            type="button"
            innerText={btnKey}
            className=""
            setNumber={setNumber}
          />
        ))}

        <Button type="reset" innerText="RESET" className="reset" />
        <Button typr="submit" innerText="=" className="equal" />
      </div>
    </form>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
