const express = require('express');
const skillController = require('../controllers/skill');
const router = express.Router();

router.get('/', skillController.getSkill);

router.post('/createSkill', skillController.createSkill);

module.exports = router;