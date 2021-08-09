const express = require('express');
const raceController = require('../controllers/race');
const router = express.Router();

router.get('/', raceController.getRaces);

router.post('/createRace', raceController.createRace);

module.exports = router;