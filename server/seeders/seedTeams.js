const sequelize = require("../sequelize"); // Sequelize instance
const Team = require("../models/Team"); // Team model

// Define the teams data
const teamsData = [
  {
    teamName: "Alpine",
    officialName: "BWT Alpine F1 Team",
    teamId: 1,
    primary: "#FF5733",
    secondary: "#C70039",
    alternate: "#900C3F",
  },
  {
    teamName: "Aston Martin",
    officialName: "Aston Martin Aramco F1 Team",
    teamId: 2,
    primary: "#33FF57",
    secondary: "#39C700",
    alternate: "#3F900C",
  },
  {
    teamName: "Ferrari",
    officialName: "Scuderia Ferrari",
    teamId: 3,
    primary: "#3357FF",
    secondary: "#0039C7",
    alternate: "#0C3F90",
  },
  {
    teamName: "Haas",
    officialName: "MoneyGram Haas F1 Team",
    teamId: 4,
    primary: "#FF33A6",
    secondary: "#C739A6",
    alternate: "#903F90",
  },
  {
    teamName: "Kick Sauber",
    officialName: "Stake F1 Team Kick Sauber",
    teamId: 5,
    primary: "#33FF57",
    secondary: "#39C700",
    alternate: "#3F900C",
  },
  {
    teamName: "McLaren",
    officialName: "McLaren Formula 1 Team",
    teamId: 6,
    primary: "#A6FF33",
    secondary: "#A6C739",
    alternate: "#3F90A6",
  },
  {
    teamName: "Mercedes",
    officialName: "Mercedes-AMG PETRONAS F1 Team",
    teamId: 7,
    primary: "#33A6FF",
    secondary: "#39A6C7",
    alternate: "#3F90A6",
  },
  {
    teamName: "RB",
    officialName: "Visa Cash App RB Formula One Team",
    teamId: 8,
    primary: "#FF5733",
    secondary: "#C70039",
    alternate: "#900C3F",
  },
  {
    teamName: "Red Bull Racing",
    officialName: "Oracle Red Bull Racing",
    teamId: 9,
    primary: "#3357FF",
    secondary: "#0039C7",
    alternate: "#0C3F90",
  },
  {
    teamName: "Williams",
    officialName: "Williams Racing",
    teamId: 10,
    primary: "#FF33A6",
    secondary: "#C739A6",
    alternate: "#903F90",
  },
];

// Seed function to insert teams data
async function seedTeams() {
  try {
    await sequelize.sync({ force: true }); // Resync the database
    await Team.bulkCreate(teamsData); // Bulk insert the team data
    console.log("Teams have been seeded successfully");
    process.exit(); // Exit the process after seeding
  } catch (error) {
    console.error("Failed to seed teams:", error);
    process.exit(1); // Exit with error status if seeding fails
  }
}

seedTeams();
