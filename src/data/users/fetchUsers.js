const { User } = require("../../db");

module.exports = async function () {
  try {
    return await User.findAll();
  } catch (error) {
    console.log("Could not fetch Users from DB:", error.message);
  }
};
