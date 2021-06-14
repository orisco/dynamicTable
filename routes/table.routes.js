const controller = require("../controllers/table.controller");

module.exports = (app) => {
  app.post("/api/add-table", controller.addTable);
};
