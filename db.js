const { Sequelize } = require('sequelize');
require('dotenv').config();

const { DB_USERNAME, DB_PASSWORD, DB_NAME, DB_HOST, DB_PORT } = process.env;
connection_uri = `postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;
const sequelize = new Sequelize(connection_uri);

async function main() {
  try {
    await sequelize.authenticate();
    console.log('database connection initialized successfully');
  } catch (error) {
    console.log('Unable to connect to the database: ', error);
  }
}

main();
