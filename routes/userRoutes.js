const {getAllUseers, getUserById} = require("../controllers/userControllers")
const { verifyToken } = require("../middleware/authjwt")


module.exports = function(app){
    app.get("/api/v1/users",[verifyToken], getAllUseers)
    app.get("/api/v1/users/:id",[verifyToken], getUserById)
}