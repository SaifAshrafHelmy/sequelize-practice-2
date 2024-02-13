const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../sequelize.js');

class User extends Model {
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

module.exports = User;
