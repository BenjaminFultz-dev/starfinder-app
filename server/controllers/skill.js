const Skill = require('../models/Skill');

module.exports = {
    getSkill: (req, res) => {
        res.render('skill.ejs')
    },
    createSkill: async (req, res) => {
        let skill;
        try {
            skill = await Skill.create({
                skill: req.body.skillName,
                ability: req.body.skillAbility,
                description: req.body.skillDescription,
                trainedOnly: req.body.trainedOnly,
                armorCheckPenalty: req.body.armorCheckPenalty
            })
            console.log(req)
        } catch (err) {
            console.log(err)
        }
        res.json(skill)
    }
}