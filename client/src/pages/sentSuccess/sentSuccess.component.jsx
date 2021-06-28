import { Box, Button, Typography } from "@material-ui/core";
import React from "react";
import { withRouter } from "react-router-dom";

const sendSuccess = ({ history }) => {
  return (
    <Box
      alignItems="center"
      flex={1}
      justifyContent="space-around"
      flexDirection="column"
      display="flex"
      height="100vh"
    >
      <Typography variant="h5">Thank you for sending the list</Typography>
      <Button onClick={() => history.push("/")}>Start a new list</Button>
    </Box>
  );
};

export default withRouter(sendSuccess);
