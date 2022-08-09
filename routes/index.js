const express = require('express');
const router = express.Router();

/* GET index. */
router.get('/', (req, res) => {
  res.send('Sequelize-CLI & Express.js')
});

module.exports = router;
