import React from 'react'

const InputButton = (props) => {
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

export default InputButton
