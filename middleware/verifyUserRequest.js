
const verifyUserRequest = async (req, res, next) => {
  const { email, password } = req.body;
  // validate the email
  if (!email) {
    res.status(400).send({
      message: "Failed! email is not provided !",
    });
    return;
  }
  if (!password) {
    res.status(400).send({
      message: "Failed! Password is not provided !",
    });
    return;
  }
  next();
};

module.exports = { verifyUserRequest };
