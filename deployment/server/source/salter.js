const bcrypt = require("bcrypt")

const saltrounds = 12

module.exports = {
    HashAndSalt : async function(password){
        var salt = await bcrypt.genSalt(saltrounds)
        var hash = await bcrypt.hash(password, salt);
        return hash;
    }
}