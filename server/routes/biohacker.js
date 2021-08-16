const express = require('express');
const biohackerController = require('../controllers/biohacker');
const router = express.Router();

router.get('/', biohackerController.getBiohacker);

module.exports = router;