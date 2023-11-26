const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const requestSchema = new Schema({
    sender: {
        type: String,
        required: true
    },
    reciever: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
});

requestSchema.plugin(passportLocalMongoose);

const FriendRequest = mongoose.model("FriendRequest", requestSchema);
module.exports = FriendRequest;
