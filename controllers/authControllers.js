const signup = (req, res) => {
  res.status(200).json({ message: "this is signup api" });
};

const signin = (req, res) => {
  res.status(201).json({ message: "this is login api" });
};

module.exports = { signin, signup };
