const express = require('express');
const themeController = require('../controllers/theme');
const router = express.Router();

router.get('/', themeController.getThemes);

router.post('/createTheme', themeController.createTheme);

module.exports = router;