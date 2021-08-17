const express = require('express');
const sheetController = require('../controllers/sheet');
const router = express.Router();

router.get('/', sheetController.getSheet);

router.post('/createSheet', sheetController.createSheet);

module.exports = router;