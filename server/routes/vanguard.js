const express = require('express');
const vanguardController = require('../controllers/vanguard');
const router = express.Router();

router.get('/', vanguardController.getVanguard);

module.exports = router;