import React from "react";
import "./textInput.styles.scss";

const Input = ({ operation, ...otherProps }) => {
  return (
    <div>
      <input {...otherProps} onChange={(e) => operation(e)} />
    </div>
  );
};

export default Input;
