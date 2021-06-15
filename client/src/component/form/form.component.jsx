import React from "react";
import TextInput from "../textInput/textInput.component";

import "./form.styles.scss";

const Form = ({ userInfo, setUserInfo }) => {
  const updateForm = (e) => {
    const { name, value } = e.target;
    setUserInfo((info) => ({
      ...info,
      [name]: value,
    }));
  };

  return (
    <div className="form">
      <div className="field">
        <TextInput
          type="text"
          name="name"
          placeholder="Creator Name"
          operation={updateForm}
        />
      </div>
      <div className="field">
        <TextInput
          type="text"
          value={userInfo.date.toString().slice(0, 15)}
          readOnly
        />
      </div>
      <div className="largeField">
        <TextInput
          type="textarea"
          name="comment"
          className="comment"
          placeholder="Comments"
          operation={updateForm}
        />
      </div>
    </div>
  );
};

export default Form;
