const mongoose = require('mongoose');

const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    userName: {type:String, required: true, unique: true},
    password: {type:String, required: true}},
    { collection: 'users' });

userSchema.plugin(uniqueValidator);
// Nous avons installé le plugin 'mongoose-unique-validator'
// Il nous permet de nous assurer que l'email rentré par un user sera unique

const UserModel = mongoose.model('User', userSchema);

module.exports = mongoose.model('User', userSchema);