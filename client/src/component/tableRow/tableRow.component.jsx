import React, { useState } from "react";

import TextInput from "../textInput/textInput.component";
import CustomButton from "../customButton/customButton.component";

import "./tableRow.styles.scss";

const TableRow = ({ setCounter, rowNumber, setTable, table }) => {
  const [row, setRow] = useState({ number: rowNumber, price: 0, quantity: 0 });
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
        } else {
          setTable((table) => [...table, { ...row }]);
        }
      });
    }
    setSaveChanges(false);
  };

  const addRow = () => {
    setTable((table) => [...table, { ...row }]);
    setCounter((counter) => [...counter, counter.length]);
    setAddRowButton(true);
    setSaveChanges(false);
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
        <h2>{rowNumber === 0 ? "Number" : rowNumber}</h2>
      </div>

      <div className="column">
        {rowNumber === 0 ? (
          <h2>Price ($USD)</h2>
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
          <h2>Total Price</h2>
        ) : (
          <TextInput value={row.quantity * row.price} readOnly />
        )}
      </div>

      <div className="column">
        {saveChanges && rowNumber != 0 ? (
          <CustomButton operation={saveRow} className="btn fas fa-save" />
        ) : null}
        {!addRowButton && rowNumber != 0 ? (
          <CustomButton operation={addRow} className="btn fas fa-plus" />
        ) : null}
      </div>
    </div>
  );
};

export default TableRow;
