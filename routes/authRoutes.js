const { signup, signin } = require("../controllers/authControllers");

module.exports = function (app) {
  app.post("/api/v1/login", signin);
  app.post("/api/v1/signup", signup);
};
