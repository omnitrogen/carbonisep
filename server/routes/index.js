var express = require("express");

const router = express.Router();

const db = require("better-sqlite3")("carbonisep.db");

router.get("/hello", function getVersion(req, res) {
    const row = db.prepare("SELECT * FROM test where test_id = ?").get(0);
    return res.json({
        message: String("Queried from database" + row.test_id + " " + row.name),
    });
    // return res.json({ message: "Test" });
});

router.get("/", (req, res) => {
    return res.json({ message: "hehe" });
});

module.exports = router;
