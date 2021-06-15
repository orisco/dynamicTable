import React, { useState } from "react";
import axios from "axios";

import Form from "../component/form/form.component";
import Table from "../component/table/table.component";
import CustomButton from "../component/customButton/customButton.component";

import "./homepage.styles.scss";

const HomePage = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    comments: "",
    date: new Date(),
  });
  const [table, setTable] = useState([]);
  const [listSent, setListSent] = useState(false);
  const [error, setError] = useState(false);

  const sendListToApi = () => {
    if (table.length === 0 || userInfo.name === "") {
      setError(userInfo);
      return;
    }
    let body = {
      creatorName: userInfo.name,
      comments: userInfo.comments,
      table,
    };
    axios
      .post("http://localhost:1400/api/add-table", body)
      .then(() => {
        setListSent(true);
        setTable([]);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="homepage">
      {listSent ? (
        <div className="wrapper">
          <div className="header">
            <h1>Thank you for sending the list</h1>
            <h2 onClick={() => setListSent(false)} className="btn">
              Start a new list
            </h2>
          </div>
        </div>
      ) : (
        <>
          <div className="wrapper">
            <div className="header">
              <h1>Order Form</h1>
              <Form setUserInfo={setUserInfo} userInfo={userInfo} />
            </div>

            <div className="body">
              <Table table={table} setTable={setTable} />
            </div>

            <div className="footer">
              <CustomButton
                operation={sendListToApi}
                className={"btn fas fa-paper-plane fa-3x"}
              ></CustomButton>
            </div>
            {error ? (
              <div className="error">
                <h2>Please fill in all the details</h2>
              </div>
            ) : null}
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;
