const express = require('express');
const spellController = require('../controllers/spell');
const router = express.Router();

router.get('/', spellController.getSpells);

router.post('/createSpell', spellController.createSpell);

module.exports = router;