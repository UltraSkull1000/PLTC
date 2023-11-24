const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.statusCode(200)
    res.send("Base of the User Router. Please select a valid endpoint.")
})

router.get("/:username", async (req, res) => {
    var dbc = require("../database/dbconnection")
    var user = await dbc.getUser(req.params.username)
    try{
        var output = { username: user.username, lastLogin: user.lastLogin}
        res.json(output);
    }
    catch (error) {
        res.sendStatus(500);
        throw error;
    }
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

module.exports = router