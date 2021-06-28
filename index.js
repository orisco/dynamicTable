const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("./db/mongoose");

let corsOptions = {
  origin: ["http://localhost:3000"],
};

app.use(cors(corsOptions));
app.use(express.json());

// routes
require("./routes/table.routes")(app);

const PORT = process.env.PORT || 1400;

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});
