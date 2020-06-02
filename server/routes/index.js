import express from "express";
import { model } from "../model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import jwt_middleware from "express-jwt";
import dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";

dotenv.config();

const router = express.Router();

router.get("/hello", (req, res) => {
    res.json({ message: "hello world!" });
});

router.post("/authenticate", async (req, res) => {
    const user = model.loginUser({ username: req.body.username });
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
                letter: user.QuizResult,
            });
        } else {
            res.status(400).json({ message: "Not allowed" });
        }
    } catch {
        res.status(400).json({ message: "Unexpected error" });
    }
});

router.post("/register", async (req, res) => {
    if (model.userAlreadyExists(req.body.username)) {
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
        model.registerUser(user);
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

router.post("/join_game", async (req, res) => {
    const userId = req.body.user.id;
    const uuid = req.body.code;
    const game = model.gameExists({ uuid });
    if (game == false) {
        return res
            .status(400)
            .json({ message: "Game with such id do not exist!" });
    }
    try {
        const gameName = model.joinGame({ userId, uuid }).Name;
        return res.status(200).json({ gameName });
    } catch {
        res.status(400).json({ message: "Unexpected error" });
    }
});

router.post("/create_game", async (req, res) => {
    const userId = req.body.user.id;
    const name = req.body.name;
    const uuid = uuidv4();
    try {
        model.createGame({ userId, uuid, name });
        return res.status(200).json({ uuid });
    } catch {
        res.status(400).json({ message: "Unexpected error" });
    }
});

router.post("/quit_game", async (req, res) => {
    const user = req.body.user;
    try {
        model.quitGame({ user });
        return res.status(200);
    } catch {
        res.status(400).json({ message: "Unexpected error" });
    }
});

router.post("/get_users", async (req, res) => {
    const uuid = req.body.code;
    try {
        const users = model.getUsers({ uuid });
        return res
            .status(200)
            .json({ users: users.map((user) => user.Username) });
    } catch {
        res.status(400).json({ message: "Unexpected error" });
    }
});

router.post("/get_quiz", async (req, res) => {
    try {
        const quiz = model.getQuiz();
        return res.status(200).json({ quiz });
    } catch {
        res.status(400).json({ message: "Unexpected error" });
    }
});

router.post("/send_quiz", async (req, res) => {
    const userId = req.body.user.id;
    const letter = req.body.letter;
    try {
        model.sendQuiz({ userId, letter });
        return res.status(200).json({ letter });
    } catch {
        res.status(400).json({ message: "Unexpected error" });
    }
});

router.post("/get_actions", async (req, res) => {
    const letter = req.body.letter;
    try {
        const actions = model.getActions(letter);
        return res
            .status(200)
            .json({ actions: actions.map((action) => action.Name) });
    } catch {
        res.status(400).json({ message: "Unexpected error" });
    }
});

export default router;
