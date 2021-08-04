const Skill = require('../models/Skill');

module.exports = {
    getSkills: async (req, res) => {
        try {
            const skills = await Skill.find()
            res.render('skill.ejs', { skills: skills })
        } catch (err) {
            console.log(err)
        }
    },
    createSkill: async (req, res) => {
        try {
            await Skill.create({
                skill: req.body.skillName,
                ability: req.body.skillAbility,
                description: req.body.skillDescription,
                trainedOnly: req.body.trainedOnly,
                armorCheckPenalty: req.body.armorCheckPenalty
            })
            console.log(req)
            res.json('Skill created.')
        } catch (err) {
            console.log(err)
        }
    }
}