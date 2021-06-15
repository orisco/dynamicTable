import React, { useState } from "react";
import TableRow from "../tableRow/tableRow.component";

import "./table.styles.scss";

const Table = ({ setTable, table }) => {
  const [counter, setCounter] = useState([0, 1]);

  return (
    <div>
      {counter.map((rowNumber) => {
        return (
          <TableRow
            key={rowNumber}
            setCounter={setCounter}
            counter={counter}
            rowNumber={rowNumber}
            setTable={setTable}
            table={table}
          />
        );
      })}
    </div>
  );
};

export default Table;
