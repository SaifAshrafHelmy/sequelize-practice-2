const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  res.json({ message: 'ALL PRODUCTS' });
});

module.exports = router;
