const userResponse = (users) => {
  usersResult = [];
  users.forEach((user) => {
    usersResult.push({
      id: user.id,
      name: user.name,
      email: user.email,
    });
  });
  return usersResult;
};

module.exports = userResponse