const express = require('express');
const envoyController = require('../controllers/envoy');
const router = express.Router();

router.get('/', envoyController.getEnvoy);

module.exports = router;