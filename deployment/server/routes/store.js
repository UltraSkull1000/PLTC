const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.statusCode(300)
    res.send("Base of the Store Router. Please select a valid endpoint.")
})



module.exports = router