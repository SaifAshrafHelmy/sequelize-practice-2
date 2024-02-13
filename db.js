const { Sequelize, DataTypes, Model } = require('sequelize');
const logger = require('./chalk-logger.js');
require('dotenv').config();

const { DB_USERNAME, DB_PASSWORD, DB_NAME, DB_HOST, DB_PORT } = process.env;
connection_uri = `postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;
const sequelize = new Sequelize(connection_uri, {
  logging: false,
});

async function main() {
  try {
    await sequelize.authenticate();
    logger.info('Database connection initialized');
    initializeDatabaseModels();

    /* WARNING: DESTRUCTIVE OPERATIONS - DO NOT USE IN PRODUCTION */
    await sequelize.sync({ force: true });
    logger.info('All models were synchronized');

    await sequelize.drop();
    logger.info('All tables dropped!');

    await sequelize.close();
    logger.info(
      'All operations done and DB connection closed '
    );
  } catch (error) {
    logger.error('Unable to connect to the database: ', error);
  }
}

main();



const initializeDatabaseModels = async () => {
  class User extends Model {
    static getAnApple() {
      return 'Apple';
    }
    getFullName() {
      return this.firstName + ' ' + this.lastName;
    }
  }
  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );

  const Saif = User.build({
    firstName: 'Saif',
    lastName: 'Ashraf',
  });
  try {
   
    logger.data(User.getAnApple()); 
    logger.data(Saif.getFullName());
  } catch (error) {
    logger.error('Error executing query: ', error);

  }
};
;
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
