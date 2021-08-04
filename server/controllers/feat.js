const Feat = require('../models/Feat');

module.exports = {
    getFeats: async (req, res) => {
        try {
            const feats = await Feat.find()
            res.render('feat.ejs', { feats: feats })
        } catch (err) {
            console.log(err)
        }
    },
    createFeat: async (req, res) => {
        try {
            await Feat.create({
                feat: req.body.featName,
                prerequisite: req.body.featPrerequisite,
                description: req.body.featDescription,
                combatFeat: req.body.combatFeat
            })
            console.log(req)
            res.json('Feat created.')
        } catch (err) {
            console.log(err)
        }
    }
}