const express = require('express');
const classController = require('../controllers/class');
const router = express.Router();

router.get('/', classController.getClass);

module.exports = router;