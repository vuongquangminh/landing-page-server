const supportRoute = require("./support");

const routeApp = (app) => {
  app.use("/api", supportRoute);
};

module.exports = routeApp;
