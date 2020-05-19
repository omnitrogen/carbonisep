import express from "express";
import { Model } from "../model.js";
const router = express.Router();

var model = new Model();

router.get("/get_users", (req, res) => {
    const users = model.getUsers();
    return res.json({
        message: users.map((elt) => [elt["Mail"], elt["Password"]]),
    });
});

router.get("/join", (req, res) => {
    var code = parseInt(req.query.code);
    var id = parseInt(req.query.id);
    var map = model.join(code, id);

    console.log(code, id, map);

    if (map.has(code)) {
        res.json({ exist: true, owner: map.get(code) == id });
    } else {
        res.json({ exist: false, owner: false });
    }

    return res;
});

router.get("/", (req, res) => {
    return res.json({ message: "hehe" });
});

export default router;
