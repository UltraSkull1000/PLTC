const express = require("express")
const router = express.Router();
const User = require("../models/users");

router.get("/:sessionKey", (req, res) => {
    res.statusCode(300)
    res.send("Base of the Store Router. Please select a valid endpoint.")
})

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
