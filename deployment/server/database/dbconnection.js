require('dotenv').config({ path: require('find-config')('.env') });

const { MongoClient } = require('mongodb');
const uri = process.env.ATLAS_URI;

const client = new MongoClient("mongodb+srv://poosd-pltc:rqDkd6WL6iYBns25@poosd-pltc.hz2nrdh.mongodb.net/?retryWrites=true&w=majority");

async function run() {
  try {
    await client.connect();
    await client.db("pltcg").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}

run().catch(console.dir);