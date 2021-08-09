const Theme = require('../models/Theme');

module.exports = {
    getThemes: async (req, res) => {
        let themes;
        try {
           if (req.query.findTheme) {
            themes = await Theme.find({ theme: req.query.findTheme })
            
           } else {
            themes = await Theme.find() 
           }
        } catch (err) {
            console.error(err)
        } 
        res.render('theme.ejs', { themes: themes })
    },
    createTheme: async (req, res) => {
        try {
            await Theme.create({
                theme: req.body.themeName,
                ability: req.body.themeAbility,
                description: req.body.themeDescription,
                firstLevel: req.body.firstLevel,
                sixthLevel: req.body.sixthLevel,
                twelfthLevel: req.body.twelfthLevel,
                eighteenthLevel: req.body.eighteenthLevel
            })
            console.log(req)
            res.json('Theme created.')
        } catch (err) {
            console.log(err)
        }
    },
   
}