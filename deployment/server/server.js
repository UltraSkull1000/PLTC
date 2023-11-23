const express = require("express")
const bodyParser = require("body-parser")
const app = express()

console.log("MaBaDmLo.xyz Premier League API Startup...")

app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {
    console.log("Client asserted a get request to the base of the API.")
    res.status(200).send("Welcome to the MaBaDmLo.xyz Premier League API!")
})

app.post('/login', async (req, res) =>{
    const data = req.body
    const dbc = require("./database/dbconnection")
    const bcrypt = require("bcrypt")
    var user = await dbc.getUser(data.username);
    const result = await bcrypt.compare(data.password, user.passwordHash, (err, result) => 
    {
        if(result){
            var key = require("./source/generateKey").generateKey(user._id)
            res.status(200).send(key);
        }
        else{
            res.status(401).send("Invalid credentials.");
        }
    })

})

app.post('/register', async (req, res) => {
    console.log("Registration request recieved")
    const data = req.body
    const dbc = require("./database/dbconnection")
    var salter = require("./source/salter")
    var saltedPassword = await salter.HashAndSalt(data.password)
    if(await dbc.postUser(data.username, saltedPassword)){
        res.status(200).send("Successfully Posted User!")
    }
    else res.status(400).send("User already exists!")
})

const userRouter = require("./routes/user")
app.use("/users", userRouter)

const storeRouter = require("./routes/store")
app.use("/store", storeRouter)

app.listen(3000)

