const express = require("express")
const router = express.Router()
const User = require("../models/users");

router.get("/:sessionkey", async (req, res) => {
    var user = await User.findOne({ sessionkey: req.params.sessionkey});
    var collection = user.collection;
    res.statusCode(200)
    res.render('../client/src/components/Collection.jsx', collection);
})

router.get("/:username/cards", async (req, res) => {
    var dbc = require("../database/dbconnection")
    var user = await dbc.getUser(req.params.username)
    try{
        var output = { cards: user.cards }
        res.json(output);
    }
    catch (error) {
        res.sendStatus(500);
        throw error;
    }
})

router.get("/:username/cards/:cardid", async (req, res) => {
    var dbc = require("../database/dbconnection")
    var user = await dbc.getUser(req.params.username)
    try{
        var output = { cards: user.cards }
        res.json(output);
    }
    catch (error) {
        res.sendStatus(500);
        throw error;
    }
})

router.get("/:username/currency", async (req, res) => {
    var dbc = require("../database/dbconnection")
    var user = await dbc.getUser(req.params.username)
    console.log("RTR> User balance is " + user.units)
    try{
        var output = { balance: user.units }
        res.json(output);
    }
    catch (error) {
        res.sendStatus(500);
        throw error;
    }
})

router.put("/:username/currency/add", async (req, res) => {
    var dbc = require("../database/dbconnection")
    var user = await dbc.putUser(req.params.username, req.query.amount)
    console.log("RTR> User balance is " + user.units)
    try{
        var output = { balance: user.units }
        res.json(output);
    }
    catch (error) {
        res.sendStatus(500);
        throw error;
    }
})

router.post("/:sessionKey/logout", (req, res) => {
    var user = User.findOne({ sessionKey: req.params.sessionKey });
    user.sessionKey = "";
    res.redirect("/");
})

module.exports = router
