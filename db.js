const { Sequelize, DataTypes, Model } = require('sequelize');
const logger = require('./logger.js');
require('dotenv').config();

const { DB_USERNAME, DB_PASSWORD, DB_NAME, DB_HOST, DB_PORT } = process.env;
connection_uri = `postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;
const sequelize = new Sequelize(connection_uri);

async function main() {
  try {
    await sequelize.authenticate();
    logger.info('database connection initialized successfully');
    initializeDatabaseModels();
    await sequelize.sync({ force: true });
    logger.info('All models were synchronized successfully.');
    console.log('--------------------------------------------------');
    await sequelize.drop();
    logger.info('All tables dropped!');

    await sequelize.close();
    logger.info(
      'All operations done and DB connection was closed successfully.'
    );
  } catch (error) {
    logger.fatal('Unable to connect to the database: ', error);
  }
}

const initializeDatabaseModels = async () => {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
  logger.info('USER MODEL DROPPED.');
};

main();

// class User extends Model {}

// User.init(
//   {
//     firstName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     lastName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     age: {
//       type: DataTypes.INTEGER,
//       allowNull: true,
//     },
//   },
//   {
//     sequelize,
//     modelName: 'User',
//   }
// );

// const user = new User({
//   firstName: 'Saif',
//   lastName: 'Ashraf',
// });

// console.log(user);
