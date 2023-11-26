const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const listingSchema = new Schema({
    seller: {
        type: String,
        required: true
    },
    offer: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    }
});

listingSchema.plugin(passportLocalMongoose);

const PlayerListing = mongoose.model('PlayerListing', listingSchema);
module.exports = PlayerListing;
