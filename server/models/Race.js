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
        type: String,
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
        required: true,
    },
    traitFour: {
        type: String,
        required: true,
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
        required: true,
    },
    alternateAbilityAdjustmentFour: {
        type: String,
        required: true,
    },
    alternateAbilityAdjustmentFive: {
        type: String,
        required: true,
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
        required: true,
    },
    alternateTraitFour: {
        type: String,
        required: true,
    },
    alternateTraitFive: {
        type: String,
        required: true,
    },
    alternateTraitSix: {
        type: String,
        required: true,
    },
    alternateTraitSeven: {
        type: String,
        required: true,
    },
    alternateTraitEight: {
        type: String,
        required: true,
    },
    alternateTraitNine: {
        type: String,
        required: true,
    },
    alternateTraitTen: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Race', RaceSchema);