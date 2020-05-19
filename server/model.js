import Database from "better-sqlite3";
const db = new Database("carbonisep.db");

export const getUsers = () => {
    const res = db.prepare("SELECT * FROM User").all();
    return res;
};

export const checkIfUserAlreadyExists = (username) => {
    const res = db
        .prepare(`SELECT Username FROM Users WHERE Username == @username`)
        .all({ username });
    return res && res.length ? true : false;
};

export const registerUser = (user) => {
    db.prepare(
        `INSERT INTO Users (FirstName, LastName, Username, Password) VALUES (@firstName, @lastName, @username, @password)`
    ).run(user);
    return true;
};

export const loginUser = (user) => {
    const res = db
        .prepare(
            `SELECT Id, FirstName, LastName, Username, Password FROM Users WHERE Username == @username`
        )
        .get(user);
    return res;
};
