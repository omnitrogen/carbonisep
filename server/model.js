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
}
