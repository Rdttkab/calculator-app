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

        <form className="header__toggle">
          <h6>THEME</h6>
          <fieldset
            className="toggle"
            aria-label="theme toggle"
            role="radiogroup"
          >
            <div className="toggle__wrapper">
              <input type="radio" name="theme" id="dark" />
              <input type="radio" name="theme" id="system" checked />
              <input type="radio" name="theme" id="light" />
              <span aria-hidden="true" className="toggle__background"></span>
              <span aria-hidden="true" className="toggle__button"></span>
            </div>

            <div className="toggle__label">
              <label for="dark">1</label>
              <label for="system">2</label>
              <label for="light">3</label>
            </div>
          </fieldset>
        </form>
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
