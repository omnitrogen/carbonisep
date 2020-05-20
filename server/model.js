import Database from "better-sqlite3";
const db = new Database("carbonisep.db");

export const model = {
    getUsers,
    checkIfUserAlreadyExists,
    registerUser,
    loginUser,
    join,
    getQuestions
}

function getUsers() {
    const res = db.prepare("SELECT * FROM User").all();
    return res;
};

function checkIfUserAlreadyExists(username) {
    const res = db
        .prepare(`SELECT Username FROM Users WHERE Username == @username`)
        .all({ username });
    return res && res.length ? true : false;
};

function registerUser(user) {
    db.prepare(
        `INSERT INTO Users (FirstName, LastName, Username, Password) VALUES (@firstName, @lastName, @username, @password)`
    ).run(user);
    return true;
};

function loginUser(user) {
    const res = db
        .prepare(
            `SELECT Id, FirstName, LastName, Username, Password FROM Users WHERE Username == @username`
        )
        .get(user);
    return res;
};

function join(code) {
    const res = db.prepare("SELECT * FROM Game").all();
    var dict = new Map();
    for (var elt of res) {
        dict.set(parseInt(elt["Id"]), parseInt(elt["OwnerId"]));
    }
    return dict;
}

function getQuestions() {
    const res = db.prepare(`SELECT * FROM QuestionsQuizz`).all();
    return res;
}