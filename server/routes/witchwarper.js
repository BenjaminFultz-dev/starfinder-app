const express = require('express');
const witchwarperController = require('../controllers/witchwarper');
const router = express.Router();

router.get('/', witchwarperController.getWitchwarper);

module.exports = router;