var model = require("./model.js");

var express = require("express");

const router = express.Router();

router.get("/hello", function getVersion(request, response) {
    console.log("yay");
    const row = test();
    return response.json({
        message: String("Queried from database" + row.test_id + " " + row.name),
    });
});
router.get("/login", function getVersion(request, response) {
    response = model.function;

    return response.json({
        element1: test,
    });
});

module.exports = router;
