const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    res.status(401).send({message : "No token Provided"});
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      res.status(401).send({message :"Invlalid user details"});
    }
    req = decoded.user  
    next();
  });
};

module.exports = { verifyToken };
