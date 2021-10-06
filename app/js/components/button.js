import React from "react";

const button = (props) => {
  function handelClick(e) {
    e.preventDefault();
    const numbers = props.innerText;
    props.setNumber(number => [number, numbers])
    console.log(`${props.innerText} is clicked`);
  }

  return (
    <button type={props.type} className={props.className} onClick={handelClick}>
      {props.innerText}
    </button>
  );
};

export default button;
