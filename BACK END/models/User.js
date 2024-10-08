const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        // required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        default: ''
    },
    username: {
        type: String,
        unique: true,
        sparse: true // Allows null values but still maintains uniqueness
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
