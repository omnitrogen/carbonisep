import express from "express";
import {
    getUsers,
    checkIfUserAlreadyExists,
    registerUser,
    loginUser,
} from "../model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import jwt_middleware from "express-jwt";
const router = express.Router();

if (typeof process.env.JWT_KEY_CARBONISEP === "undefined") {
    console.log(
        "Please add an environment variable $JWT_KEY_CARBONISEP with the JWT secret key!"
    );
} else {
    const accessTokenSecret = process.env.JWT_KEY_CARBONISEP;
}

router.get("/hello", (req, res) => {
    res.json({ message: "hello world!" });
});

router.get("/get_users", (req, res) => {
    const users = getUsers();
    res.json({ message: users.map((elt) => elt["FirstName"]) });
});

router.post("/authenticate", async (req, res) => {
    const user = loginUser({ username: req.body.username });
    if (user == null) {
        return res.status(400).json({ message: "Cannot find user" });
    }
    try {
        if (await bcrypt.compare(req.body.password, user.Password)) {
            // const accessToken = jwt.sign(
            //     { username: user.email },
            //     accessTokenSecret
            // );
            return res.status(200).json({
                id: user.Id,
                username: user.Username,
                firstName: user.FirstName,
                lastName: user.LastName,
                token: "fake-jwt-token",
            });
        } else {
            res.status(400).json({ message: "Not allowed" });
        }
    } catch {
        res.status(400).json({ message: "Unexpected error" });
    }
});

router.post("/register", async (req, res) => {
    if (checkIfUserAlreadyExists(req.body.username)) {
        return res
            .status(409)
            .json({ message: "A user with this email adress already exists!" });
    }
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username,
            password: hashedPassword,
        };
        registerUser(user);
        res.status(201).send();
    } catch {
        res.status(500).send();
    }
});

router.get("/join", (req, res) => {
    var code = req.query.code;
    if (code == 12345) {
        res.json({ exist: true });
    }

    return res;
});

export default router;
