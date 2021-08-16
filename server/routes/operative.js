const express = require('express');
const operativeController = require('../controllers/operative');
const router = express.Router();

router.get('/', operativeController.getOperative);

module.exports = router;