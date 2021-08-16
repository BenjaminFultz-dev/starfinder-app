const express = require('express');
const mechanicController = require('../controllers/mechanic');
const router = express.Router();

router.get('/', mechanicController.getMechanic);

module.exports = router;