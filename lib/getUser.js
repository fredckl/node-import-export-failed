const { getAllUsers } = require(".");

const getUser = (name) => {
  const users = getAllUsers();
  return users.find(({name: userName}) => (name === userName))
}

module.exports = getUser;