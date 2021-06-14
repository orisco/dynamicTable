const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema({
  creatorName: String,
  date: {
    type: Date,
    default: Date.now,
  },
  comments: String,
  table: [
    {
      number: Number,
      price: Number,
      quantity: Number,
      sum: Number,
    },
  ],
});

tableSchema.pre("save", function (next) {
  this.table.filter(
    (oneTable) => (oneTable.sum = oneTable.price * oneTable.quantity)
  );
  next();
});

const Table = mongoose.model("Table", tableSchema);

module.exports = { Table };
