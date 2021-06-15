import React, { useState } from "react";

import TextInput from "../textInput/textInput.component";
import CustomButton from "../customButton/customButton.component";

import "./tableRow.styles.scss";

const TableRow = ({ setCounter, rowNumber, setTable, table }) => {
  const [row, setRow] = useState({
    number: rowNumber,
    price: 0,
    quantity: 0,
  });
  const [addRowButton, setAddRowButton] = useState(false);
  const [saveChanges, setSaveChanges] = useState(false);

  const saveRow = () => {
    if (table.length === 0) {
      setTable((table) => [...table, { ...row }]);
    } else {
      table.map((currentRow, i) => {
        if (currentRow.number === rowNumber) {
          const newTable = [...table];
          newTable.splice(i, 1, row);
          setTable(newTable);
        }
      });
    }
    setSaveChanges(false);
  };

  const addRow = () => {
    setCounter((counter) => [...counter, counter.length]);
    setAddRowButton(true);
    setSaveChanges(false);
    if (rowNumber != 1) {
      setTable((table) => [...table, { ...row }]);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRow((row) => ({
      ...row,
      [name]: value,
    }));
    setSaveChanges(true);
  };

  return (
    <div className="row">
      <div className="column">
        <h2>{rowNumber === 0 ? "#" : rowNumber}</h2>
      </div>

      <div className="column">
        {rowNumber === 0 ? (
          <h2>Price ($)</h2>
        ) : (
          <TextInput
            type="number"
            name="price"
            placeholder="Product Number"
            operation={handleChange}
          />
        )}
      </div>

      <div className="column">
        {rowNumber === 0 ? (
          <h2>Quantity</h2>
        ) : (
          <TextInput
            type="number"
            name="quantity"
            className="cell"
            placeholder="Product Quantity"
            operation={handleChange}
          />
        )}
      </div>

      <div className="column">
        {rowNumber === 0 ? (
          <h2>Total Price ($)</h2>
        ) : (
          <TextInput value={row.price * row.quantity} readOnly />
        )}
      </div>

      <div className="column">
        {(!addRowButton && saveChanges && rowNumber !== 0) ||
        (addRowButton && saveChanges && rowNumber !== 0) ? (
          <CustomButton operation={saveRow} className="btn fas fa-save fa-lg" />
        ) : null}
        {!saveChanges && !addRowButton && rowNumber !== 0 ? (
          <CustomButton operation={addRow} className="btn fas fa-plus fa-lg" />
        ) : null}
      </div>
    </div>
  );
};

export default TableRow;
