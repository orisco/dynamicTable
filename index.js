const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("./db/mongoose");

app.use(cors());
app.use(express.json());

// routes
require("./routes/table.routes")(app);

const PORT = process.env.PORT || 1400;

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});
