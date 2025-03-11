const mongoose = require('mongoose');

const characterSchema = mongoose.Schema({
    id: { type: String, required: true },
    prenom: String,
    nom: String,
    surnom: String,
    age: String,
    description: String,
    resumerp: String,
    race: String,
    portrait: String
});

const CharacterModel = mongoose.model('Character', characterSchema);

module.exports = CharacterModel;

/*
    caracs: [{
        Constitution: Number,
        Force: Number,
        Agilité: Number,
        Furtivité: Number,
        Perception: Number,
        Intelligence: Number,
        Volonté: Number
    }],
    traits: [{
        id: String,
        titre: String,
        description: String,
    }],
    domainesgeneraux: [{
        id: String,
        title: String,
        points: Number
    }],
    domainesmagiques: [{
        id: String,
        title: String,
        points: Number
    }],
*/