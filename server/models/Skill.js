const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
    skill: {
        type: String,
        required: true,
    },
    ability: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    trainedOnly: {
        type: Boolean,
        required: true,
    },
    armorCheckPenalty: {
        type: Boolean,
        required: true,
    }
});

module.exports = mongoose.model('Skill', SkillSchema);