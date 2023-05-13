const {getAllUseers, getUserById} = require("../controllers/userControllers")


module.exports = function(app){
    app.get("/api/v1/users", getAllUseers)
    app.get("/api/v1/users/:id", getUserById)
}