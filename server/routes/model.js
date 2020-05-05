var sq = require("sqlite3");
const db = new sq.Database("../carbonisep.db");

test = () => {
    let sql = "SELECT * FROM User";
    const row = db.all(sql, [], (err, rows) => {
        rows.forEach((row) => {
            console.log(row);
        });
    });
    console.log(row);
    return row;
};
