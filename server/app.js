var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes");

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

app.use(bodyParser.json());

app.use("/", routes);

module.exports = app;
