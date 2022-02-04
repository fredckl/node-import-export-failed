const { getAllUsers } = require("./getAllUsers");

const getUser = (name) => {
  const users = getAllUsers();
  return users.find(({name: userName}) => (name === userName))
}

module.exports = getUser;