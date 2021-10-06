import React from 'react'

function Header() {
    return (
      <header className="header">
        <h3>calc</h3>

        <fieldset
          className="toggle"
          aria-label="theme toggle"
          role="radiogroup">
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
    );
}

export default Header
