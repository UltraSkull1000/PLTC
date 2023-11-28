const bcrypt = require("bcrypt")

const saltrounds = 12

module.exports = {
    HashAndSalt : async function(password){
        var salt = await bcrypt.genSalt(saltrounds)
        console.log("Salting password " + password + " with " + salt)
        var hash = await bcrypt.hash(password, salt);
        return hash;
    }
}