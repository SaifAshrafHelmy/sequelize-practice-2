const express = require('express');
const usersRouter = require('./users/users.router.js');
const productsRouter = require('./products/products.router.js');
const logger = require('../chalk-logger.js');
const router = express.Router();

router.get('', (req, res, next) => {
  logger.log("You're inside the main v1 API.");
  next();
});

router.use('/users', usersRouter);
router.use('/products', productsRouter);

module.exports = router;
