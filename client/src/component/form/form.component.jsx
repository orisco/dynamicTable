import React from "react";
import TextInput from "../textInput/textInput.component";

import "./form.styles.scss";

const Form = ({ setUserInfo }) => {
  const date = new Date();

  const updateForm = (e) => {
    const { name, value } = e.target;
    setUserInfo((info) => ({
      ...info,
      [name]: value,
    }));
  };

  return (
    <div className="form">
      <TextInput
        type="text"
        name="name"
        className="name"
        placeholder="Creator Name"
        operation={updateForm}
      />
      <TextInput type="text" className="date" value={date} readOnly />
      <TextInput
        type="text"
        name="comment"
        className="comment"
        placeholder="Comment"
        operation={updateForm}
      />
    </div>
  );
};

export default Form;
