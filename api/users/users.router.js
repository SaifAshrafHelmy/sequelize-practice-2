const express = require('express');
const logger = require('../../chalk-logger.js');
const User = require('../../models/User.js');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json({ users });
    res.json({ users });
  } catch (error) {
    logger.info(error);
  }
});

router.get('/new', async (req, res) => {
  try {
    const user = await User.create({ firstName: 'Saif', lastName: 'Ashraf' });

    res.json({ user });
  } catch (error) {
    logger.info(error);
  }
});

module.exports = router;
