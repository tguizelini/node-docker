const express = require("express")
const app = express()

const PORT = 3000
const HOST = "0.0.0.0"

app.get("/", (req, res) => {
    res.send("Hello Docker!")
})

app.listen(PORT, HOST, () => console.log(`server running on port ${PORT}`))
