const { Table } = require("../models/table.model.js");

exports.addTable = (req, res) => {
  const table = new Table(req.body);
  // const calculate = table.calculateSum();
  // console.log(calculate);
  table.save((err, newTable) => {
    if (err) {
      res.status(500).send({
        message: err,
      });
      return;
    }

    res.send({ message: "Table was added successfully" });
  });
};

// get table by user
