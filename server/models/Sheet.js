const mongoose = require('mongoose');

const SheetSchema = new mongoose.Schema({
    name: {
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
    race: {
        type: String,
        required: true,
    },
    theme: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    speed: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    homeWorld: {
        type: String,
        required: true,
    },
    alignment: {
        type: String,
        required: true,
    },
    deity: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    abilityScores: {
        strength: {
            score: Number,
            modifier: Number,
        },
        dexterity: {
            score: Number,
            modifier: Number,
        },
        constitution: {
            score: Number,
            modifier: Number,
        },
        intelligence: {
            score: Number,
            modifier: Number,
        },
        wisdom: {
            score: Number,
            modifier: Number,
        },
        charisma: {
            score: Number,
            modifier: Number,
        }
    },
    skills: [{
            name: String,
            total: Number,
            ranks: Number,
            classBonus: Number,
            abilityModifier: Number,
            miscModifier: Number,
    }],
    skillNotes: {
        type: String,
    },
    initiative: {
        total: Number,
        dexModifier: Number,
        miscModifier: Number,
    },
    healthAndResolve: {
        total: {
            staminaPoints: Number,
            hitPoints: Number,
            resolvePoints: Number,
        },
        current: {
            staminaPoints: Number,
            hitPoints: Number,
            resolvePoints: Number,
        }
    },
    armorClass: {
        energyArmorClass: {
            total: Number,
            armorBonus: Number,
            dexModifier: Number,
            miscModifier: Number,
        },
        kineticArmorClass: {
            total: Number,
            armorBonus: Number,
            dexModifier: Number,
            miscModifier: Number,
        }
    },
    savingThrows: {
        fortitude: {
            total: Number,
            baseSave: Number,
            abilityModifier: Number,
            miscModifier: Number,
        },
        reflex: {
            total: Number,
            baseSave: Number,
            abilityModifier: Number,
            miscModifier: Number,
        },
        will: {
            total: Number,
            baseSave: Number,
            abilityModifier: Number,
            miscModifier: Number,
        }
    },
    attackBonuses: {
        melee: {
            total: Number,
            baseAttackBonus: Number,
            abilityModifier: Number,
            miscModifier: Number
        },
        ranged: {
            total: Number,
            baseAttackBonus: Number,
            abilityModifier: Number,
            miscModifier: Number
        },
        thrown: {
            total: Number,
            baseAttackBonus: Number,
            abilityModifier: Number,
            miscModifier: Number
        },
    },
    weapons: [{
        weapon: String,
        level: Number,
        attackBonus: Number,
        damage: String,
        critical: String,
        range: String,
        type: String,
        ammo: String,
        special: String
    }],
    abilities: [{
        name: String,
        description: String,
        notes: String
    }],
    featsAndProficiencies: [{
        name: String,
        description: String,
        notes: String
    }],
    languages: {
        type: String
    },
    equipment: {
        type: String
    },
    spells: {
        zero: {
            spellsKnown: Number, 
            spells: [{
                name: String,
                description: String
        }]},
        one: {
            spellsKnown: Number,
            spellsPerDay: Number,
            spellSlotsUsed: Number,
            spells: [{
                name: String,
                description: String
        }]},
        two: {
            spellsKnown: Number,
            spellsPerDay: Number,
            spellSlotsUsed: Number,
            spells: [{
                name: String,
                description: String
        }]},
        three: {
            spellsKnown: Number,
            spellsPerDay: Number,
            spellSlotsUsed: Number,
            spells: [{
                name: String,
                description: String
        }]},
        four: {
            spellsKnown: Number,
            spellsPerDay: Number,
            spellSlotsUsed: Number,
            spells: [{
                name: String,
                description: String
        }]},
        five: {
            spellsKnown: Number,
            spellsPerDay: Number,
            spellSlotsUsed: Number,
            spells: [{
                name: String,
                description: String
        }]},
        six: {
            spellsKnown: Number,
            spellsPerDay: Number,
            spellSlotsUsed: Number,
            spells: [{
                name: String,
                description: String
        }]},
        }
    })

module.exports = mongoose.model('Sheet', SheetSchema);