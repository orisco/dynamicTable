import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import UploadTable from "../../services/uploadTable.service";

import Form from "../../component/form/form.component";
import TableComponent from "../../component/table/table.component";

import { Box, Button, Typography } from "@material-ui/core";

const HomePage = () => {
  const history = useHistory();
  const [userInfo, setUserInfo] = useState({
    name: "",
    comments: "",
    date: new Date(),
  });
  const [table, setTable] = useState([]);
  const [error, setError] = useState("");
  const [counter, setCounter] = useState([1]);

  const updateData = (data) => {
    const newTable = [...table];
    newTable.splice(data.number - 1, 1, data);
    setTable(newTable);
  };

  const checkIfNotFound = (inTable, data) => {
    if (!inTable) {
      setTable((table) => [...table, { ...data }]);
    } else {
      updateData(data);
    }
  };

  const saveToHomepage = (data) => {
    let inTable = false;
    if (table.length === 0) {
      setTable((table) => [...table, { ...data }]);
    } else {
      table.forEach((currentRow) => {
        if (currentRow.number === data.number) {
          inTable = true;
        }
      });
      checkIfNotFound(inTable, data);
    }
  };

  const sendListToApi = () => {
    if (table.length === 0 || userInfo.name === "") {
      setError("Form cannot be empty");
    }
    let body = {
      creatorName: userInfo.name,
      comments: userInfo.comments,
      table,
    };
    UploadTable(body, history);
  };

  return (
    <Box
      alignItems="center"
      flex={1}
      justifyContent="space-around"
      flexDirection="column"
      display="flex"
      height="100vh"
      container="true"
    >
      <Typography variant="h3" align="center">
        Order Form
      </Typography>

      <Form setUserInfo={setUserInfo} userInfo={userInfo} />

      <Box container="true">
        <TableComponent counter={counter} saveToHomepage={saveToHomepage} />
      </Box>

      <Box>
        <Button onClick={sendListToApi}>Send</Button>
        <Button
          onClick={() =>
            setCounter((counter) => [...counter, counter.length + 1])
          }
        >
          Add a row
        </Button>
      </Box>

      {error && (
        <Box>
          <Typography>{error}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default HomePage;
