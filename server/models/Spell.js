const mongoose = require('mongoose');

const SpellSchema = new mongoose.Schema({
    spell: {
        type: String,
        required: true,
    },
    class: {
        type: String,
        required: true,
    },
    level: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    notes: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Spell', SpellSchema);