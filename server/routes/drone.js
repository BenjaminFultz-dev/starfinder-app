const express = require('express');
const droneController = require('../controllers/drone');
const router = express.Router();

router.get('/', droneController.getDrone);

module.exports = router;