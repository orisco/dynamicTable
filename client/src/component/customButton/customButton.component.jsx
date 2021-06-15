import React from "react";
import "./customButton.styles.scss";

const CustomButton = ({ operation, children, ...otherProps }) => {
  return (
    <div onClick={() => operation()} {...otherProps}>
      {children}
    </div>
  );
};

export default CustomButton;
