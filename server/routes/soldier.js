const express = require('express');
const soldierController = require('../controllers/soldier');
const router = express.Router();

router.get('/', soldierController.getSoldier);

module.exports = router;