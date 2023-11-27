const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require('mongoose');
const app = express()

const User = require('./models/users');
const Listing = require('./models/playerListing');
const Trade = require('./models/trade');
const Friend = require('./models/friendRequest');

//db connection
const dbURL = process.env.ATLAS_URI;
mongoose.connect(dbURL)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

console.log("MaBaDmLo.xyz Premier League API Startup...")

app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {
    console.log("Client asserted a get request to the base of the API.")
    res.status(200).render('../client/src/components/AuthForm.jsx');
})

app.post('/login', async (req, res) =>{
    const data = req.body
    //const dbc = require("./database/dbconnection")
    const bcrypt = require("bcrypt")
    var user = await User.findOne({ username: data.username });
    const result = await bcrypt.compare(data.password, user.passwordHash, (err, result) => 
    {
        if(result){
            var key = require("./source/generateKey").generateKey(user._id)
            res.status(200).send(key);
            user.sessionKey = key;
            user.money = user.money + ((Date.now() - user.lastLogin) / 10000);
            res.redirect('/users/${key}');
        }
        else{
            res.status(401).send("Invalid credentials.");
        }
    })

})

app.post('/register', async (req, res) => {
    console.log("Registration request recieved")
    const data = req.body
    //const dbc = require("./database/dbconnection")
    var salter = require("./source/salter")
    var saltedPassword = await salter.HashAndSalt(data.password)
    const username = await User.findOne({ username: data.username });
    const email = await User.findOne({ email: data.email });
    if(username || email){
        res.status(400).send("User already exists!");
    }
    else {
        const newUser = await User.create({
            username: data.username,
            password: saltedPassword,
            email: data.email,
            verified: false,
            money: 5000,
            collection: [],
            friendList: [],
            holds: [],
            dupes: [],
            lastLogin: Date.now(),
            sessionKey: ""
        });
    }
    res.status(200).send("Successfully Posted User!");
})

app.put("/:sessionKey/quicksell", (req, res) => {
    var user = User.findOne({ sessionKey: req.params.sessionKey});
    var card = res.body.card;
    if(user.collection.indexOf(card) == -1 && user.dupes.indexOf(card) == -1)
    {
        res.status(400).json({ error: "User does not have this card" });
    }
    else
    {
        var money = 0;
        var rarity = card.rarity;
        switch(rarity) {
            case 0: //common
                money = 100;
                break;
            case 1: //rare
                money = 300;
                break;
            case 2: //pro
                money = 1000;
                break;
            case 3: // world class
                money = 5000;
                break;
        }
        user.money = user.money + money;
        //user is selling a dupe
        if(user.dupes.indexOf(card) != -1)
        {
            user.dupes.splice(user.dupes.indexOf(card), 1);
        }
        else
        {
            user.collection.splice(user.collection.indexOf(card), 1);
        }
    }
    res.redirect('/users/${req.params.sessionKey}');
});

app.post('/validatecards', async (req, res) => {
    const dbc = require("./database/dbconnection");
    await dbc.validateCards();
    res.send("validated.")
})

app.get('/verify/:sessionKey', (req, res) => {
    res.render("../client/src/components/);
});

app.post('/verify/:sessionKey', (req, res) => {
    
});

const userRouter = require("./routes/user")
app.use("/user", userRouter)

const storeRouter = require("./routes/store")
app.use("/store", storeRouter)

