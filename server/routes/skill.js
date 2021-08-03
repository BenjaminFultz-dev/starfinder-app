const express = require('express');
const skillController = require('../controllers/skill');
const router = express.Router();

router.get('/', skillController.getSkills);

router.post('/createSkill', skillController.createSkill);

module.exports = router;