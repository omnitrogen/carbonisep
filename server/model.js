import Database from "better-sqlite3";
const db = new Database("carbonisep.db");

export const getUsers = () => {
    const res = db.prepare("SELECT * FROM User").all();
    return res;
};
