const express = require('express');
const technomancerController = require('../controllers/technomancer');
const router = express.Router();

router.get('/', technomancerController.getTechnomancer);

module.exports = router;