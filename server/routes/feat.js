const express = require('express');
const featController = require('../controllers/feat');
const router = express.Router();

router.get('/', featController.getFeats);

router.post('/createFeat', featController.createFeat);

module.exports = router;