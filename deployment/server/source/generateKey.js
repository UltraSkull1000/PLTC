const gapikey = require("generate-api-key")

function generateKey(userid){
    var key = gapikey.generateApiKey()
    var dbc = require("$/database/dbconnection")
    dbc.postKey(userid, key)
    return key
}

module.exports = {
    generateKey : function(userid){
        var key = gapikey.generateApiKey()
        var dbc = require("../database/dbconnection")
        dbc.postKey(userid, key)
        return key
    }
}