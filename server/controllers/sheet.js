const Sheet = require('../models/Sheet');

module.exports = {
    getSheet: async (req, res) => {
        let races;
        try {
           if (req.query.findRace) {
            races = await Race.find({ race: req.query.findRace })
            
           } else {
            races = await Race.find() 
           }
        } catch (err) {
            console.error(err)
        } 
        res.render('sheet.ejs', { races: races })
    },
    createSheet: async (req, res) => {
        try {
            await Race.create({
                race: req.body.raceName,
                abilityModifiers: req.body.abilityModifiers,
                hitPoints: req.body.hitPoints,
                traits: req.body.traits,
                alternateAbilityAdjustments: req.body.alternateAbilityAdjustments,
                alternateTraits: req.body.alternateTraits
            })
            console.log(req)
            res.json('Race created.')
        } catch (err) {
            console.log(err)
            res.json('Creation failed.')
        }
    },
   
}