
// This file is used to connect to the database using Sequelize ORM.
import { Sequelize, DataTypes } from "sequelize";

// Importing the book models
import booksModel from "./models/bookModels.js"; 
import userModel from "./models/userModels.js";

// Importing dotenv to load environment variables from .env file
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config(); 

// Create a new Sequelize instance with the database connection string
const sequelizeObject = new Sequelize(
    process.env.DATABASE_CONNECTION_STRING,
    {
      dialect: "postgres" // change this to the dialect you are using, e.g., 'mysql', 'sqlite', etc.
    }
);

// create a new Sequelize instance with the database connection string
sequelizeObject
  .authenticate()
  .then(() => {
    console.log(
      "Connection to the database has been established successfully."
    );
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

// Define a model for the database table
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelizeObject;

// Trggering the model to create the table in the database
db.bookData = booksModel( sequelizeObject, DataTypes );
db.userData = userModel( sequelizeObject, DataTypes );

// Sync the models with the database
db.sequelize.sync({ alter : false }).then(() => {
  console.log("Database & tables created!");
});

// export the database connection and model
export const models = { bookData: db.bookData, userData : db.userData };
