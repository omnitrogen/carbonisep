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
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

router.get("/hello", (req, res) => {
    res.json({ message: "hello world!" });
});

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

    router.post("/authenticate", async (req, res) => {
        const user = loginUser({ username: req.body.username });
        if (user == null) {
            return res.status(400).json({ message: "Cannot find user" });
        }
        try {
            if (await bcrypt.compare(req.body.password, user.Password)) {
                const accessToken = jwt.sign(
                    { username: user.email },
                    process.env.JWT_KEY_CARBONISEP
                );
                return res.status(200).json({
                    id: user.Id,
                    username: user.Username,
                    firstName: user.FirstName,
                    lastName: user.LastName,
                    token: accessToken,
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
                .json({
                    message: "A user with this email adress already exists!",
                });
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

    router.get(
        "/plop",
        jwt_middleware({ secret: process.env.JWT_KEY_CARBONISEP }),
        (req, res) => {
            return res.status(200).json({ plop: "plop I'm a protected route" });
        }
    );

    if (map.has(code)) {
        res.json({ exist: true, owner: map.get(code) == id });
    } else {
        res.json({ exist: false, owner: false });
    }

    return res;
});

router.get("/quizz", (req, res) => {
    res.json(model.getQuestions());
    return res;
});

router.get("/", (req, res) => {
    return res.json({ message: "hehe" });
});

export default router;
