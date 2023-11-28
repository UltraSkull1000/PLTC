const express = require("express")
const router = express.Router();
const genPack = require("../source/generateCardPack");

router.get("/", (req, res) => {
    res.statusCode(300)
    res.send("Base of the Store Router. Please select a valid endpoint.")
})

router.get("/pack", (req, res) => {
    var dbc = require("../database/dbconnection")
    var user = dbc.getUser(req.query.username)
    if(!dbc.validateKey(user._id, req.headers.X-API-KEY)){
        res.sendStatus(403);
        return;
    }
    var free = freePack(user.lastLogin);
    if(free)
    {
        user.lastLogin = Date.now();
    }
    res.render("../client/src/Components/MarketPlace.jsx", { freePack: free });
});

router.post("/pack", (req, res) => {
    var dbc = require("../database/dbconnection")
    var user = dbc.getUser(req.query.username)
    if(!dbc.validateKey(user._id, req.headers.X-API-KEY)){
        res.sendStatus(403);
        return;
    }
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
            if(user.cards.indexOf(cards[i]) == -1)
            {
                user.cards.push(cards[i]);
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
    res.render("../client/src/components/", { pack : cards, freePack : freePack(user.lastLogin) });
});

function freePack(lastLogin){
    var oneDay = 1 * 24 * 60 * 60 * 1000;
    if(lastLogin - Date.now() >= oneDay)
        return true;
    return false;
}

module.exports = router
