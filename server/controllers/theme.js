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
                firstLevel: {
                    name: req.body.firstLevel.name,
                    description: req.body.firstLevel.description,
                },
                sixthLevel: {
                    name: req.body.sixthLevel.name,
                    description: req.body.sixthLevel.description,
                },
                twelfthLevel: {
                    name: req.body.twelfthLevel.name,
                    description: req.body.twelfthLevel.description,
                },
                eighteenthLevel: {
                    name: req.body.eighteenthLevel.name,
                    description: req.body.eighteenthLevel.description,
                }
            })
            console.log(req)
            res.json('Theme created.')
        } catch (err) {
            console.log(err)
        }
    },
   
}