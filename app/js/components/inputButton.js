import React from 'react'

const InputButton = (props) => {

    function handelClick() {
      console.log("Data is passing");
      props.onClick(props.value)
    }

    return (
      <input
        type={props.type}
        // name=""
        // id=""
        value={props.value}
        // className={props.className}
        onClick={handelClick}
      />
    );
}

export default InputButton
