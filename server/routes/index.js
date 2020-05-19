import express from "express";
import { getUsers } from "../model.js";
const router = express.Router();

router.get("/hello", function getVersion(request, response) {
    console.log("yay");
    const row = test();
    return response.json({
        message: String("Queried from database" + row.test_id + " " + row.name),
    });
});

router.get("/get_users", (req, res) => {
    const users = getUsers();
    return res.json({
        message: users.map((elt) => elt["FirstName"]),
    });
});

router.get("/login", function getVersion(request, response) {
    response = model.function;

    return response.json({
        element1: test,
    });
});

router.get("/join", (req, res) => {
    var code = req.query.code;
    if (code == 12345) {
        res.json({ exist: true });
    } else {
        res.json({ exist: false });
    }

    return res;
});

router.get("/", (req, res) => {
    return res.json({ message: "hehe" });
});

export default router;
