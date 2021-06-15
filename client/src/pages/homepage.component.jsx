import React, { useState } from "react";
import axios from "axios";

import Form from "../component/form/form.component";
import Table from "../component/table/table.component";
import CustomButton from "../component/customButton/customButton.component";

import "./homepage.styles.scss";

const HomePage = () => {
  const [userInfo, setUserInfo] = useState({ name: "", comments: "" });
  const [table, setTable] = useState([]);
  const [listSent, setListSent] = useState(false);

  const sendListToApi = () => {
    let body = {
      creatorName: userInfo.name,
      comments: userInfo.comments,
      table,
    };
    console.log(body);
    axios
      .post("http://localhost:1400/api/add-table", body)
      .then(() => {
        setListSent(true);
        setTable([]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="homepage">
      {listSent ? (
        <div className="formWrapper">
          <h1>thank you for sending the list</h1>
          <h2 onClick={() => setListSent(false)}>start a new list</h2>
        </div>
      ) : (
        <>
          <div className="formWrapper">
            <h1>Order Form</h1>
            <Form setUserInfo={setUserInfo} />
          </div>
          <div className="table">
            <Table table={table} setTable={setTable} />
          </div>
          <div className="footer">
            <CustomButton operation={sendListToApi}>Send List</CustomButton>
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;
