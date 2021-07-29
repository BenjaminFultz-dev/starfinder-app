const mongoose = require('mongoose');

const FeatSchema = new mongoose.Schema({
    feat: {
        type: String,
        required: true,
    },
    prerequisite: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: true,
    },
    combatFeat: {
        type: Boolean,
        required: true,
    }
});

module.exports = mongoose.model('Feat', FeatSchema);