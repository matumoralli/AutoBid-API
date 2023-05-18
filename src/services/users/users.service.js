const { User } = require("../../database/models");

async function fetchUsers () {
  try {
    return await User.findAll();
  } catch (error) {
    console.log("Could not fetch Users from DB:", error.message);
  }
};

async function createUser ( { name, email, password } ) {
  try {
    return await User.create({
    name,
    email,
    password,
  });
  } catch (error) {
    console.log("Could not create User:", error.message);
  }
};

module.exports = {fetchUsers, createUser}