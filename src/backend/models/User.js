const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for todo
const UserSchema = new Schema({
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
    saved_recipes: {
        type: [],
    }
});

// Create model for todo
const User = mongoose.model('User', UserSchema);

module.exports = User;