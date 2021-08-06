const Feat = require('../models/Feat');

module.exports = {
    getFeats: async (req, res) => {
        let feats;
        try {
           if (req.query.findFeat) {
            feats = await Feat.find({ feat: req.query.findFeat })
            
           } else {
            feats = await Feat.find() 
           }
        } catch (err) {
            console.error(err)
        } 
        res.render('feat.ejs', { feats: feats })
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