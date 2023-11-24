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
    console.log("DBC > Got user " + user.username)
    return user;
  },
  
  postUser : async function(username, saltedPassword) {
    await client.connect();
    var users = client.db("pltcg").collection("users")
    if (!(await users.findOne({ username: username }))){
      await client.db("pltcg").collection("users").insertOne({username: username, passwordHash: saltedPassword, units: 1000, cards : require("../source/generateCardPack").generateCardPack(0),lastLogin: Date.now() });
      return true;
    }
    else return false;
  },

  putUser : async function (username, add) {
    await client.connect();
    var user = await client.db("pltcg").collection("users").findOne({ username: username })
    console.log("DBC > Got user " + user.username)
    await user.updateOne({ _id : user._id, username : user.username }, { units : user.units + add })
    user = await client.db("pltcg").collection("users").findOne({ username: username })
    return user
  },
  
  postKey : async function(userid, key) {
    await client.connect();
    var keys = client.db("pltcg").collection("keys")
    await keys.findOneAndDelete({ _id : userid })
    await keys.insertOne({ _id : userid, key : key, createdAt: Date.now()})
  },

  validateKey : async function (userid, key) {
    await client.connect();
    var keys = client.db("pltcg").collection("keys")
    var key = await keys.findOne({userid : userid, key : key});
    if(key){
      if(key.createdAt > Date.now() - (1000 * 60 * 60))
        return true
      else{
        await keys.deleteOne({ _id : userid, key: key});
        return false;
      }
    }
    else return false
  },

  validateCards : async function (){
    await client.connect();
    var cards = client.db("pltcg").collection("cards")
    await cards.deleteMany({teamabv : "Heroes"})
    var list = await cards.find({});
    console.log(list);
    for(i = 0; i < await cards.countDocuments({}); i++){
      console.log("Updating card " + i + ", Name: ", list[i].name)
      await cards.updateOne({name : list[i].name}, { $set: {id : i}})
    }
  }
}

