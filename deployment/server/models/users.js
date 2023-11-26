const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    verified: {
        type: Boolean,
        required: true
    },
    money: {
        type: Number,
        required: true
    },
    collection: {
        type: [String],
        required: true
    },
    friendList: {
        type: [String],
        required: true
    },
    holds: {
        type: [String],
        required: true
    },
    dupes: {
        type: [String],
        required: true
    },
    lastLogin: {
        type: Date,
        required: true
    }
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', userSchema);
module.exports = User;
