const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
const User = require('./users');
const Player = require('./playerListing');

const tradeSchema = new Schema({
    sender: {
        type: String,
        required: true
    },
    reciever: {
        type: String,
        required: true
    },
    offer: {
        type: [String],
        required: true
    },
    request: {
        type: [String],
        required: true
    },
    status: {
        type: String,
        required: true
    }
});

tradeSchema.plugin(passportLocalMongoose);

const Trade = mongoose.model('Trade', tradeSchema);
module.exports = Trade;
