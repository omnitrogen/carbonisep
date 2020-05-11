var app = require("express")();
var bodyParser = require("body-parser");
var routes = require("./routes");

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

app.use(bodyParser.json());

app.use("/", routes);

module.exports = app;
