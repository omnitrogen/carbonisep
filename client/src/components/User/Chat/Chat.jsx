import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import { Navigation } from "components/App/Navigation";
import $ from "jquery";
const ENDPOINT = "http://localhost:8000";

function Chat() {
    const [response, setResponse] = useState("");
    useEffect(() => {
        const socket = socketIOClient(ENDPOINT);
        var pseudo = prompt("Quel est votre pseudo ?");
        socket.emit("nouveau_client", pseudo);
        document.title = pseudo + " - " + document.title;

        socket.on("message", function (data) {
            insereMessage(data.pseudo, data.message);
        });

        socket.on("nouveau_client", function (pseudo) {
            $("#zone_chat").prepend(
                "<p><em>" + pseudo + " a rejoint le Chat !</em></p>"
            );
        });

        $("#formulaire_chat").submit(function () {
            var message = $("#message").val();
            socket.emit("message", message);
            insereMessage(pseudo, message);
            $("#message").val("").focus();
            return false;
        });

        function insereMessage(pseudo, message) {
            $("#zone_chat").prepend(
                "<p><strong>" + pseudo + "</strong> " + message + "</p>"
            );
        }
    }, []);
    return (
        <>
            <div>
                <Navigation />
                <h1>Le super Chat temps réel !</h1>

                <form action="/" method="post" id="formulaire_chat">
                    <input
                        type="text"
                        name="message"
                        id="message"
                        placeholder="Votre message..."
                        size="50"
                        autofocus
                    />
                    <input type="submit" id="envoi_message" value="Envoyer" />
                </form>

                <section id="zone_chat"></section>
            </div>
        </>
    );
}

export { Chat };
