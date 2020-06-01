import app from "./app.js";
import http from "http";
const server = http.createServer(app);
import listen from "socket.io";
const io = listen(server);
import ent from "ent";

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

io.on("connection", (socket) => {
    socket.on("event://send-message", (msg) => {
        const payload = JSON.parse(msg);
        socket.broadcast.emit("event://get-message", msg);
    });
    socket.on("event://update-users", (msg) => {
        const payload = JSON.parse(msg);
        socket.broadcast.emit("event://get-updated-users", msg);
    });
});

startServer();
