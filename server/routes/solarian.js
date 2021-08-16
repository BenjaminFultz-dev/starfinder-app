const express = require('express');
const solarianController = require('../controllers/solarian');
const router = express.Router();

router.get('/', solarianController.getSolarian);

module.exports = router;