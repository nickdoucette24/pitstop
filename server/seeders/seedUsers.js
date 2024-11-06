const sequelize = require("../sequelize");
const User = require("../models/User");

// Define initial user data
const userData = {
  firstName: "Nick",
  lastName: "Doucette",
  username: "nickdoucette24",
  country: "Canada",
  email: "nickdoucette24@hotmail.com",
  teamId: 3,
};

// Seed function to insert initial user
async function seedUsers() {
  try {
    await sequelize.sync(); // Ensure models are synced without forcing
    await User.create(userData); // Insert the user data
    console.log("User has been seeded successfully");
    process.exit();
  } catch (error) {
    console.error("Failed to seed user:", error);
    process.exit(1);
  }
}

seedUsers();
