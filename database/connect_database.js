
// This file is used to connect to the database using Sequelize ORM.
import { Sequelize, DataTypes } from "sequelize";

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

// export the database connection and model
export default db;
