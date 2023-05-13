const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

//@desc post user registration
//@route POST api/v1/signup
//@access public

const signup = async (req, res) => {
  const { name, email, password } = req.body;

  //Validating the userName
  if (!name) {
    res.status(400).send({
      message: "Failed! name is not provided !",
    });
  }
  // email is present
  const isEmail = await User.findOne({ email });
  if (isEmail != null) {
    res.status(400).send({
      message: "Failed! Email  already exists!",
    });
  }

  let hashPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    name,
    email,
    password: hashPassword,
  });
  try {
    if (user) {
      const postResponse = {
        name: user.name,
        email: user.email,
        id: user.id,
        createdAt: user.createdAt,
      };
      res.status(201).json(postResponse);
    }
  } catch (error) {
    console.error("Some error while saving the user in db", error.message);
    res.status(500).send({
      message: "Some internal error while inserting the element",
    });
  }
};

//@desc post user login
//@route POST api/v1/login
//@access public

const signin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user == null) {
    res.status(400).send({
      message: "Failed! Userid doesn't exist!",
    });
  }

  //Checkig if the password matches
  var passwordIsValid = bcrypt.compareSync(password, user.password);

  if (!passwordIsValid) {
    return res.status(401).send({
      accessToken: null,
      message: "Invalid Password!",
    });
  }
  var token = jwt.sign(
    {
      user: {
        name: user.name,
        email: user.email,
        id: user.id,
      },
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "15m" }
  );

  res.status(200).send({
    name: user.name,
    email: user.email,
    accessToken: token,
  });
};

module.exports = { signin, signup };
