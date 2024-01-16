const express = require("express");
const app = express();
const server = require("http").Server(app);
app.set("view engine", "ejs");
app.use(express.static("public"));

const {v4:UUID} = require("uuid");

app.get("/", (req, res) => {
    res.redirect(`/${UUIDv4()}`)
});

app.get("/:room", (req, res) => {
    res.render("index", {roomid: req.params.room})
});
server.listen(3030);