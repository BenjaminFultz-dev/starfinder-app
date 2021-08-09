const Race = require('../models/Race');

module.exports = {
    getRaces: async (req, res) => {
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
        res.render('race.ejs', { races: races })
    },
    createRace: async (req, res) => {
        try {
            await Race.create({
                race: req.body.raceName,
                abilityModifiers: req.body.abilityModifiers,
                hitPoints: req.body.hitPoints,
                traitOne: req.body.traitOne,
                traitTwo: req.body.traitTwo,
                traitThree: req.body.traitThree,
                traitFour: req.body.traitFour,
                alternateAbilityAdjustmentOne: req.body.alternateAbilityAdjustmentOne,
                alternateAbilityAdjustmentTwo: req.body.alternateAbilityAdjustmentTwo,
                alternateAbilityAdjustmentThree: req.body.alternateAbilityAdjustmentThree,
                alternateAbilityAdjustmentFour: req.body.alternateAbilityAdjustmentFour,
                alternateAbilityAdjustmentFive: req.body.alternateAbilityAdjustmentFive,
                alternateTraitOne: req.body.alternateTraitOne,
                alternateTraitTwo: req.body.alternateTraitTwo,
                alternateTraitThree: req.body.alternateTraitThree,
                alternateTraitFour: req.body.alternateTraitFour,
                alternateTraitFive: req.body.alternateTraitFive,
                alternateTraitSix: req.body.alternateTraitSix,
                alternateTraitSeven: req.body.alternateTraitSeven,
                alternateTraitEight: req.body.alternateTraitEight,
                alternateTraitNine: req.body.alternateTraitNine,
                alternateTraitTen: req.body.alternateTraitTen
            })
            console.log(req)
            res.json('Race created.')
        } catch (err) {
            console.log(err)
        }
    },
   
}