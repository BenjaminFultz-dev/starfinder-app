const Feat = require('../models/Feat');

module.exports = {
    getFeat: (req, res) => {
        res.render('feat.ejs')
    },
    createFeat: async (req, res) => {
        try {
            await Feat.create({})
        } catch (err) {
            console.log(err)
        }
    }
}