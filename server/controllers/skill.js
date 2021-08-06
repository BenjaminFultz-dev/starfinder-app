const Skill = require('../models/Skill');

module.exports = {
    getSkills: async (req, res) => {
        let skills;
        try {
           if (req.query.findSkill) {
            skills = await Skill.find({ skill: req.query.findSkill })
            
           } else {
            skills = await Skill.find() 
           }
        } catch (err) {
            console.error(err)
        } 
        res.render('skill.ejs', { skills: skills })
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
    },
   
}