const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema({
  creatorName: {
    type: String,
    required: [true, "please type your name"],
  },
  date: Date,
  comments: String,
  table: [
    {
      number: Number,
      price: { type: Number, require: [true, "type product's price"] },
      quantity: { type: Number, default: 1 },
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
