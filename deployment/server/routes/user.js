const express = require("express")
const router = express.Router()

router.get("/:username", async (req,res) => {
    var dbc = require("../database/dbconnection")
    var user = await dbc.getUser(req.params.username)
    if(!dbc.validateKey(user._id, req.headers.X-API-KEY)){
        res.sendStatus(403);
        return;
    }
    res.status(200).json({ username: user.username, units: user.units, lastLogin: user.lastLogin })
});

router.get("/:username/cards", async (req, res) => {
    var dbc = require("../database/dbconnection")
    var user = await dbc.getUser(req.params.username)
    var cards = await dbc.getAllCards();
    if(!dbc.validateKey(user._id, req.headers.X-API-KEY)){
        res.sendStatus(403);
        return;
    }
    try{
        var output = { username: user.username, cards: cards }
        res.status(200).json(output);
    }
    catch (error) {
        res.sendStatus(500);
        throw error;
    }
})

router.get("/:username/cards/:cardid", async (req, res) => {
    var dbc = require("../database/dbconnection")
    var user = await dbc.getUser(req.params.username)
    if(!dbc.validateKey(user._id, req.headers.X-API-KEY)){
        res.sendStatus(403);
        return;
    }
    try{
        var output = { username: user.username, card: user.cards }
        res.status(200).json(output);
    }
    catch (error) {
        res.sendStatus(500);
        throw error;
    }
})

router.get("/:username/currency", async (req, res) => {
    var dbc = require("../database/dbconnection")
    var user = await dbc.getUser(req.params.username)
    if(!dbc.validateKey(user._id, req.headers.X-API-KEY)){
        res.sendStatus(403);
        return;
    }
    console.log("RTR> User balance is " + user.units)
    try{
        var output = { balance: user.units }
        res.status(200).json(output);
    }
    catch (error) {
        res.sendStatus(500);
        throw error;
    }
})

router.put("/:username/currency/add", async (req, res) => {
    var dbc = require("../database/dbconnection")
    var user = await dbc.putUser(req.params.username, req.query.amount)
    if(!dbc.validateKey(user._id, req.headers.X-API-KEY)){
        res.sendStatus(403);
        return;
    }
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

module.exports = router
