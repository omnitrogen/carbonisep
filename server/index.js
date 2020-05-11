var app = require("./app");
var server = require("http").createServer(app);
var io = require("socket.io").listen(server);
var ent = require("ent");

const PORT = 8000;

async function startServer() {
    try {
        server.listen(PORT, "0.0.0.0");
        console.log(`Server running at http://localhost:${PORT}/`);
    } catch (error) {
        console.log("Server could not be created");
        console.log(error);
    }
}

io.sockets.on("connection", function (socket, pseudo) {
    socket.on("nouveau_client", function (pseudo) {
        pseudo = ent.encode(pseudo);
        socket.pseudo = pseudo;
        socket.broadcast.emit("nouveau_client", pseudo);
    });

    socket.on("message", function (message) {
        message = ent.encode(message);
        socket.broadcast.emit("message", {
            pseudo: socket.pseudo,
            message: message,
        });
    });
});

startServer();
