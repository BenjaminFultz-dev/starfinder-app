const mongoose = require('mongoose');

const ThemeSchema = new mongoose.Schema({
    theme: {
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
    firstLevel: {
        name: String,
        description: String,
    },
    sixthLevel: {
        name: String,
        description: String,
    },
    twelfthLevel: {
        name: String,
        description: String,
    },
    eighteenthLevel: {
        name: String,
        description: String,
    }
});

module.exports = mongoose.model('Theme', ThemeSchema);