import React from "react";

import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import "./form.styles.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25vw",
    },
  },
}));

const Form = ({ userInfo, setUserInfo }) => {
  const classes = useStyles();
  const updateForm = (e) => {
    const { name, value } = e.target;
    setUserInfo((info) => ({
      ...info,
      [name]: value,
    }));
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        label="Name"
        variant="outlined"
        name="name"
        onChange={updateForm}
      />
      <TextField
        value={userInfo.date.toString().slice(0, 15)}
        label="Date"
        variant="outlined"
        disabled
      />
      <TextField
        id="outlined-multiline-static"
        label="comment"
        multiline
        rows={4}
        name="comment"
        variant="outlined"
        onChange={updateForm}
      />
    </form>
  );
};

export default Form;
