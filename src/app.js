const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hi john!");
});

app.post("/", (req, res) => {
    if (
        req.body.username === process.env.USERNAME &&
        req.body.password === process.env.PASSWORD
    ) {
        return res.send();
    } else {
        return res.status(409).send();
    }
});

module.exports = app;
