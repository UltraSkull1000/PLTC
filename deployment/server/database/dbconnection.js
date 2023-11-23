require('dotenv').config();
const { MongoClient, BSON } = require('mongodb');
const uri = process.env.ATLAS_URI;
const client = new MongoClient(uri);

module.exports = {
  ping : async function() {
    try {
      await client.connect();
      await client.db("pltcg").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      await client.close();
    }
  },

  getUser : async function (username) {
    await client.connect();
    var user = await client.db("pltcg").collection("users").findOne({ username: username })
    return user;
  },
  
  postUser : async function(username, saltedPassword) {
    await client.connect();
    var users = client.db("pltcg").collection("users")
    if (!(await users.findOne({ username: username }))){
      await client.db("pltcg").collection("users").insertOne({username: username, passwordHash: saltedPassword, units: 1000, lastLogin: Date.now() });
      return true;
    }
    else return false;
  },
  
  postKey : async function(userid, key) {
    await client.connect();
    var keys = client.db("pltcg").collection("keys")
    await keys.insertOne({ _id : userid, key : key, createdAt: Date.now()})
  },

  validateKey : async function (userid, key) {
    await client.connect();
    var keys = client.db("pltcg").collection("keys")
    if(await keys.findOne({userid : userid, key : key}))
      return true
    else return false
  },
}

