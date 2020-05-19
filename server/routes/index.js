import express from "express";
import { getUsers } from "../model.js";
const router = express.Router();

router.get("/get_users", (req, res) => {
    const users = getUsers();
    return res.json({
        message: users.map((elt) => [elt["Mail"], elt["Password"]]),
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
