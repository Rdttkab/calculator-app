import React from "react";
import ReactDOM from "react-dom";
import "../scss/styles.scss";

function Button(props) {
  return (
    <input
      type={props.type}
      name=""
      id=""
      value={props.value}
      className={props.className}
    />
  );
}

function App() {
  return (
    <div className="calc">
      <header className="header">
        <h3>calc</h3>

        <fieldset
          className="toggle"
          aria-label="theme toggle"
          role="radiogroup"
        >
          <legend>THEME</legend>
          <div className="toggle__label">
            <label htmlFor="theme-one">1</label>
            <label htmlFor="theme-two">2</label>
            <label htmlFor="theme-three">3</label>
          </div>

          <div className="toggle__wrapper">
            <input type="radio" name="theme" id="theme-one" defaultChecked />
            <input type="radio" name="theme" id="theme-two" />
            <input type="radio" name="theme" id="theme-three" />
            <span aria-hidden="true" className="toggle__background"></span>
            <span aria-hidden="true" className="toggle__button"></span>
          </div>
        </fieldset>
      </header>
      <div className="calc-display">
        <Button type="text" />
      </div>

      <div className="calc-input">
        <Button type="button" value="7" className="" />
        <Button type="button" value="8" className="" />
        <Button type="button" value="9" className="" />
        <Button type="button" value="DEL" className="delete" />
        <Button type="button" value="4" className="" />
        <Button type="button" value="5" className="" />
        <Button type="button" value="6" className="" />
        <Button type="button" value="+" className="" />
        <Button type="button" value="1" className="" />
        <Button type="button" value="2" className="" />
        <Button type="button" value="3" className="" />
        <Button type="button" value="-" className="" />
        <Button type="button" value="." className="" />
        <Button type="button" value="0" className="" />
        <Button type="button" value="/" className="" />
        <Button type="button" value="*" className="" />
        <Button type="button" value="RESET" className="reset" />
        <Button type="button" value="=" className="equal" />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
