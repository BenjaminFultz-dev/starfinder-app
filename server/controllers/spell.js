const Spell = require('../models/Spell');

module.exports = {
    getSpells: async (req, res) => {
        let spells;
        try {
           if (req.query.findSpell) {
            spells = await Spell.find({ spell: req.query.findSpell })
            
           } else {
            spells = await Spell.find() 
           }
        } catch (err) {
            console.error(err)
        } 
        res.render('spell.ejs', { spells: spells })
    },
    createSpell: async (req, res) => {
        try {
            await Spell.create({
                spell: req.body.spellName,
                class: req.body.spellClass,
                level: req.body.spellLevel,
                description: req.body.spellDescription,
                notes: req.body.spellNotes
            })
            console.log(req)
            res.json('Spell created.')
        } catch (err) {
            console.log(err)
        }
    },
   
}