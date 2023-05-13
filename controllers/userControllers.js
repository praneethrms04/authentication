const User = require("../models/userModel");
const userResponse = require("../utils/objectConverter");
//@desc Get all Contacts
//@route GET api/contacts
//@access private
const getAllUseers = async (req, res) => {
  const users = await User.find({});
  try {
    res.status(200).send(userResponse(users));
  } catch (error) {
    console.error(`error while fetching the users `);
    res.status(500).send({
      message: "Some internal error occured",
    });
  }
};

const getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    const postResponse = {
      id: user.id,
      name: user.name,
      email: user.email,
    };
    res.status(200).send(postResponse);
  } else {
    res.status(200).send({
      message: "User with this id is not present",
    });
  }
};

module.exports = { getAllUseers, getUserById };
