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

async function banUser (req) {
  try{
    const user = await User.findByPk(req)//llega
    if(user && !user.isAdmin){
      if(user.isActive){
        user.isActive = false;
        user.save()
        return(user)
      } else if (!user.isActive) {
        user.isActive = true
        user.save()
        return(user)
      }
    } else if (user && user.isAdmin){
      console.log("Can't ban an admin.")
    } else {
      console.log("User not found")
    }
  } catch (error) {
    console.log(error.message)
  } 
}

module.exports = {fetchUsers, createUser, banUser}