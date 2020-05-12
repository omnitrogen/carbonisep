import express from "express";
import { getUsers } from "../model.js";
const router = express.Router();

router.get("/hello", (req, res) => {
    return res.json({
        message: "hello world!",
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

router.get("/", (req, res) => {
    return res.json({ message: "hehe" });
});

export default router;
