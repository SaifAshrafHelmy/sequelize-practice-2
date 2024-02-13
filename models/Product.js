const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../sequelize.js');

class Product extends Model {
  getProductNameAndPrice() {
    return [this.name, this.price].join(' ');
  }
}
Product.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: DataTypes.INTEGER,
  },
  { sequelize, modelName: 'Product' }
);

module.exports = Product;
