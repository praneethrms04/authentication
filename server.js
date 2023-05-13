const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/dbConnection");
const serverConfig = require("./config/serverConfig");
const cors = require("cors");
const app = express();

connectDB();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ message: "I am home route" });
});

require("./routes/authRoutes")(app);
require("./routes/userRoutes")(app);

app.listen(serverConfig.PORT, () => {
  console.log(`server running on port ${serverConfig.PORT}`);
});
