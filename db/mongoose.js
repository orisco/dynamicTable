const mongoose = require("mongoose");
const config = require("../config/mongoose.config");

mongoose
  .connect(
    `mongodb+srv://${config.USER}:${config.PSWD}@${config.CLUSTER}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => {
    console.log("connected to db");
  })
  .catch((error) => {
    console.log(`connection error ${error}`);
  });

module.exports = mongoose;
