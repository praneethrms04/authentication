const { signup, signin } = require("../controllers/authControllers");
const { verifyUserRequest } = require("../middleware/verifyUserRequest");

module.exports = function (app) {
  app.post("/api/v1/login",[verifyUserRequest], signin);
  app.post("/api/v1/signup",[verifyUserRequest], signup);
};
