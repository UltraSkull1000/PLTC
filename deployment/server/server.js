const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const baseRouter = express.Router()

console.log("MaBaDmLo.xyz Premier League API Startup...")

baseRouter.use(bodyParser.urlencoded({
    extended: true
}))

baseRouter.get('/', (req, res) => {
    console.log("Client asserted a get request to the base of the API.")
    res.status(200).send("Welcome to the MaBaDmLo.xyz Premier League API!")
})

baseRouter.post('/login', async (req, res) =>{
    const data = req.body
    const dbc = require("./database/dbconnection")
    const bcrypt = require("bcrypt")
    var user = await dbc.getUser(data.username);
    if(!user){
        return res.status(404).json({ message : "User not found!"})
    }
    await bcrypt.compare(data.password, user.passwordHash, (err, resx) => 
    {
        if(resx){
            var key = require("./source/generateKey").generateKey(user._id)
            return res.status(200).json({key : key});
        }
        else{
            return res.status(401).json({message : "Invalid credentials."});
        }
    })

})

baseRouter.post('/register', async (req, res) => {
    const data = req.body
    const dbc = require("./database/dbconnection")
    var salter = require("./source/salter")
    console.log(data.password)
    var saltedPassword = await salter.HashAndSalt(data.password)
    if(await dbc.postUser(data.username, saltedPassword)){
        return res.status(200).json({ message : "Successfully Posted User!" })
    }
    else return res.status(400).json({ message : "User already exists!"})
})

const userRouter = require("./routes/user")
baseRouter.use("/user", userRouter)

const storeRouter = require("./routes/store")
baseRouter.use("/store", storeRouter)

app.use("/api", baseRouter)

app.listen(3000)