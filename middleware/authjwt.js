const verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    res.status(401);
    throw new Error("No token Provided");
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      res.status(401);
      throw new Error("Invlalid user details");
    }
    req.userId = decoded.id;
    // console.log(req.userId)
    next();
  });
};

module.exports = { verifyToken };
