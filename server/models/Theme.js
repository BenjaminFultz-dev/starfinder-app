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
        type: String,
        required: true,
    },
    sixthLevel: {
        type: String,
        required: true,
    },
    twelfthLevel: {
        type: String,
        required: true,
    },
    eighteenthLevel: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Theme', ThemeSchema);