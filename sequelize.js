const { Sequelize, DataTypes, Model } = require('sequelize');
const logger = require('./chalk-logger.js');
require('dotenv').config();

const { DB_USERNAME, DB_PASSWORD, DB_NAME, DB_HOST, DB_PORT } = process.env;
connection_uri = `postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;
const sequelize = new Sequelize(connection_uri, {
  logging: false,
});

module.exports = { sequelize };
