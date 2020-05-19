import Database from "better-sqlite3";
const db = new Database("carbonisep.db");
export class Model {
    getUsers() {
        const res = db.prepare("SELECT * FROM User").all();
        return res;
    }
    join(code) {
        const res = db.prepare("SELECT * FROM Game").all();
        var dict = new Map();
        for (var elt of res) {
            dict.set(parseInt(elt["Id"]), parseInt(elt["OwnerId"]));
        }
        return dict;
    }

    getUsers() {
        const res = db.prepare("SELECT * FROM User").all();
        return res;
    }

    getQuestions() {
        const res = db.prepare(`SELECT * FROM QuestionsQuizz`).all();
        return res;
    }

    checkIfUserAlreadyExists(email) {
        const res = db
            .prepare(`SELECT Mail FROM Users WHERE Mail == '${email}'`)
            .all();
        return res && res.length ? true : false;
    }

    registerUser(user) {
        db.prepare(
            `INSERT INTO Users (FirstName, LastName, Mail, Password) VALUES (@firstName, @lastName, @email, @password)`
        ).run(user);
        return true;
    }

    loginUser(user) {
        const res = db
            .prepare(
                `SELECT FirstName, LastName, Mail, Password FROM Users WHERE Mail == @email`
            )
            .get(user);
        return res;
    }
}
