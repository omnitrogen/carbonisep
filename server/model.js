import Database from "better-sqlite3";
const db = new Database("carbonisep.db");

export const getUsers = () => {
    const res = db.prepare("SELECT * FROM User").all();
    return res;
};

export const getQuestions = () => {
    const res = db.prepare(`SELECT * FROM QuestionsQuizz`).all();
    return res;
};

export const checkIfUserAlreadyExists = (email) => {
    const res = db
        .prepare(`SELECT Mail FROM Users WHERE Mail == '${email}'`)
        .all();
    return res && res.length ? true : false;
};

export const registerUser = (user) => {
    db.prepare(
        `INSERT INTO Users (FirstName, LastName, Mail, Password) VALUES (@firstName, @lastName, @email, @password)`
    ).run(user);
    return true;
};

export const loginUser = (user) => {
    const res = db
        .prepare(
            `SELECT FirstName, LastName, Mail, Password FROM Users WHERE Mail == @email`
        )
        .get(user);
    return res;
};
