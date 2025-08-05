const const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello from Jenkins Web App!");
});

app.listen(3000, () => {
    console.log("Server running on 3000");
});
