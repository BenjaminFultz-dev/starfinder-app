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
    traitOne: {
        type: String,
        required: true,
    },
    traitTwo: {
        type: String,
        required: true,
    },
    traitThree: {
        type: String,
        required: false,
    },
    traitFour: {
        type: String,
        required: false,
    },
    alternateAbilityAdjustmentOne: {
        type: String,
        required: true,
    },
    alternateAbilityAdjustmentTwo: {
        type: String,
        required: true,
    },
    alternateAbilityAdjustmentThree: {
        type: String,
        required: false,
    },
    alternateAbilityAdjustmentFour: {
        type: String,
        required: false,
    },
    alternateAbilityAdjustmentFive: {
        type: String,
        required: false,
    },
    alternateTraitOne: {
        type: String,
        required: true,
    },
    alternateTraitTwo: {
        type: String,
        required: true,
    },
    alternateTraitThree: {
        type: String,
        required: false,
    },
    alternateTraitFour: {
        type: String,
        required: false,
    },
    alternateTraitFive: {
        type: String,
        required: false,
    },
    alternateTraitSix: {
        type: String,
        required: false,
    },
    alternateTraitSeven: {
        type: String,
        required: false,
    },
    alternateTraitEight: {
        type: String,
        required: false,
    },
    alternateTraitNine: {
        type: String,
        required: false,
    },
    alternateTraitTen: {
        type: String,
        required: false,
    }
});

module.exports = mongoose.model('Race', RaceSchema);