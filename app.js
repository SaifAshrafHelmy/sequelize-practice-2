const express = require('express');
const { sequelize } = require('./sequelize.js');
const User = require('./models/User.js');
const Product = require('./models/Product.js');
const logger = require('./chalk-logger.js');
const app = express();
const PORT = 3000;
const api = require('./api/index.js');

initModels = async () => {
  try {
    await sequelize.sync();
    logger.log('All models were synchronized successfully.');
  } catch (error) {
    logger.error('Error syncing models:', error);
  }
};
initModels();

app.use('/api/v1', api);

app.listen(PORT, () => {
  logger.log(`Express server is listening on http://localhost:${PORT}`);
});
