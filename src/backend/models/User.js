require('dotenv').config();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    ingredients: {
        type: [],
    },
    dietary_restrictions: {
        type: [],
    },
    health_problems: {
        type: [],
    },
    allergies: {
        type: [],
    },
    saved_recipes: {
        type: [],
    }
});


module.exports = mongoose.model('User', UserSchema);