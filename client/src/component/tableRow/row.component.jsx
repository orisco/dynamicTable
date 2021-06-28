import React, { useState } from "react";

import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";

const Row = ({ rowNumber, saveToTable }) => {
  const [row, setRow] = useState({
    number: rowNumber,
    price: 0,
    quantity: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRow((row) => ({
      ...row,
      [name]: value,
    }));
    saveToTable(row);
  };

  return (
    <TableRow>
      <TableCell>{rowNumber}</TableCell>
      <TableCell align="right">
        <TextField name="name" onChange={handleChange} />
      </TableCell>
      <TableCell align="right">
        <Input
          id="standard-adornment-amount"
          type="number"
          name="price"
          onChange={handleChange}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
        />
      </TableCell>
      <TableCell align="right">
        <TextField type="number" name="quantity" onChange={handleChange} />
      </TableCell>
      <TableCell align="right">
        <TextField value={row.price * row.quantity} />
      </TableCell>
    </TableRow>
  );
};

export default Row;
