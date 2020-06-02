import Database from "better-sqlite3";
const db = new Database("carbonisep.db");

export const model = {
    userAlreadyExists,
    registerUser,
    loginUser,
    gameExists,
    joinGame,
    createGame,
    quitGame,
    getUsers,
    getQuiz,
    sendQuiz,
    getCards,
    getActions,
    setScore,
    getResultGame,
};

function userAlreadyExists(username) {
    const res = db
        .prepare(`SELECT Username FROM Users WHERE Username == @username`)
        .all({ username });
    return res && res.length ? true : false;
}

function registerUser(user) {
    db.prepare(
        `INSERT INTO Users (FirstName, LastName, Username, Password) VALUES (@firstName, @lastName, @username, @password)`
    ).run(user);
    return true;
}

function loginUser(user) {
    const res = db
        .prepare(
            `SELECT Id, FirstName, LastName, Username, Password, QuizResult FROM Users WHERE Username == @username`
        )
        .get(user);
    return res;
}

function gameExists(uuid) {
    const res = db
        .prepare(`SELECT Uuid FROM Games WHERE Uuid == @uuid`)
        .all(uuid);
    return res && res.length ? true : false;
}

function joinGame(game) {
    db.prepare(`UPDATE Users SET GameId=@uuid WHERE Id=@userId;`).run(game);
    const res = db
        .prepare(`SELECT Name FROM Games WHERE Uuid == @uuid`)
        .get(game);
    return res;
}

function setScore(result) {
    db.prepare(
        `INSERT INTO GameResults (gameId, playerId, score) VALUES (@idGame, @idPlayer, @score)`
    ).run(result);
    return true;
}

function getResultGame(idGame) {
    const res = db
        .prepare(
            `SELECT u.Username, gr.score FROM GameResults as gr 
                            JOIN Users as u ON u.id = gr.playerId
                            WHERE gr.gameId == @idGame`
        )
        .all({ idGame });
    return res;
}
function createGame(game) {
    db.prepare(`INSERT INTO Games VALUES (@uuid, @userId, @name)`).run(game);
    db.prepare(`UPDATE Users SET GameId=@uuid WHERE Id=@userId;`).run(game);
    return true;
}

function quitGame(user) {
    db.prepare(`UPDATE Users SET GameId=null WHERE Id=@user.id;`).run({
        user,
    });
    return true;
}

function getUsers(uuid) {
    const res = db
        .prepare("SELECT Username FROM Users WHERE GameId=@uuid")
        .all(uuid);
    return res;
}

function getQuiz() {
    const res = db.prepare(`SELECT * FROM Quiz`).all();
    return res;
}

function sendQuiz(quiz) {
    db.prepare(`UPDATE Users SET QuizResult=@letter WHERE Id=@userId;`).run(
        quiz
    );
    return true;
}

function getCards() {
    const res = db
        .prepare(`SELECT name, cost, score, background FROM Actions`)
        .all();
    return res;
}

function getActions(letter) {
    if (letter === "A" || letter == null) {
        const res = db
            .prepare(`SELECT Name FROM Actions WHERE isA == 1;`)
            .all();
        return res;
    } else if (letter === "B") {
        const res = db
            .prepare(`SELECT Name FROM Actions WHERE isB == 1;`)
            .all();
        return res;
    } else if (letter === "C") {
        const res = db
            .prepare(`SELECT Name FROM Actions WHERE isC == 1;`)
            .all();
        return res;
    } else if (letter === "D") {
        const res = db
            .prepare(`SELECT Name FROM Actions WHERE isD == 1;`)
            .all();
        return res;
    }
}
