import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../scss/styles.scss";
import Header from "./components/header";
import InputButton from "./components/inputButton";
import Button from "./components/button";

function App() {
  const [operand, setOperand] = useState([0]);
  const [operation, setOperation] = useState();
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

  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "."];
  const operands = ["+", "-", "/", "*"];

  function handelClick(data) {
    console.log(`${data} is recived`);
    if (numbers.includes(data)) {
      console.log("true")
      const op = operand.slice();
      op.push(data)
      const opp = parseInt(op.join(""));
      console.log(opp)
      setOperand([opp]);
    }
    if(operands.includes()){

    }
  }

  // function handelChange(event) {
  //   this.setNumber({ number: event.target.value });
  // }

  return (
    <form className="calc">
      <Header />
      <div className="calc-display">
        <InputButton type="text" value={operand.length === 0 ? 0 : new Intl.NumberFormat().format(operand)} />
      </div>

      <div className="calc-input">
        {calculatorBtnKeys.map((btnKey, index) => (
          <InputButton
            key={index}
            type="button"
            value={btnKey}
            // className=""
            onClick={handelClick}
          />
        ))}

        <Button type="reset" innerText="RESET" className="reset" />
        <Button typr="submit" innerText="=" className="equal" />
      </div>
    </form>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
