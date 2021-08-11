const mongoose = require('mongoose');

const RaceSchema = new mongoose.Schema({
    race: {
        type: String,
        required: true,
    },
    abilityModifiers: {
        type: String,
        required: true,
    },
    hitPoints: {
        type: Number,
        required: true,
    },
    traits: [{
        name: String,
        description: String,
    }],
    
    alternateAbilityAdjustments: [{
        name: String,
        description: String,
    }], 
    alternateTraits: [{
        name: String,
        description: String,
    }]
});

module.exports = mongoose.model('Race', RaceSchema);