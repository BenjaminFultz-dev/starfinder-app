const express = require('express');
const mysticController = require('../controllers/mystic');
const router = express.Router();

router.get('/', mysticController.getMystic);

module.exports = router;