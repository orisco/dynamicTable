import React from "react";
import Row from "../tableRow/row.component";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const TableComponent = ({ counter, saveToHomepage }) => {
  const saveToTable = (childData) => {
    saveToHomepage(childData);
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Number</TableCell>
            <TableCell>Item Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Total Price</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {counter.map((rowNumber) => (
            <Row
              key={rowNumber}
              rowNumber={rowNumber}
              saveToTable={saveToTable}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
