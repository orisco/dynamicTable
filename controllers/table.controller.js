const { Table } = require("../models/table.model.js");

exports.addTable = (req, res) => {
  try {
    const table = new Table(req.body);
    table.save((error, newTable) => {
      if (error) {
        res.status(500).send({
          message: error,
        });
        return;
      }

      res.send({ message: "Table was added successfully" });
    });
  } catch (error) {
    res.send({ msg: error });
  }
};
