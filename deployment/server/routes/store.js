const express = require("express")
const router = express.Router();
const User = require("../models/users");
const genPack = require("../source/generateCardPack");

router.get("/:sessionKey", (req, res) => {
    res.statusCode(300)
    res.send("Base of the Store Router. Please select a valid endpoint.")
})

router.get("/:sessionKey/pack", (req, res) => {
    
});

router.post("/:sessionKey/pack", (req, res) => {
    var user = User.findOne({ sessionKey: req.params.sessionKey });
    var cost;
    var packType = res.body.packType;
    switch(packType) {
        case 0:
            cost = 700;
            break;
        case 1:
            cost = 1500;
            break;
        case 2:
            cost = 3000;
            break;
        case 3:
            cost = 7000;
            break;
        default:
            cost = 0;
            packType = 0;
            break;
    }
    if(user.money >= cost){
        user.money = user.money - cost;
        var cards = genPack.generateCardPack(packType);
        for(var i = 0; i < cards.length; i++) {
            if(user.collection.indexOf(cards[i]) == -1)
            {
                user.collection.push(cards[i]);
            }
            else
            {
                user.dupes.push(cards[i]);
            }
        }
        
    }
    else
    {
        res.status(400).json({ error: "User does not have sufficient funds" });
    }
});

router.put("/:sessionKey/quicksell", (req, res) => {
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
});



module.exports = router
