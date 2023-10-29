const express = require("express")
const app = express();

app.get("/", (req, res) => {
    res.send("Hello ");
})


const PORT = 5500;

app.listen(PORT, () => {
    console.log("Listening on Port" + PORT + "...")
})
