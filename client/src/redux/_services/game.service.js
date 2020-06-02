import { authHeader } from "../_helpers";

export const gameService = {
    joinGame,
    createGame,
    quitGame,
    getUsers,
};

function joinGame(code) {
    let user = JSON.parse(localStorage.getItem("user"));

    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, user }),
    };

    return fetch(`${process.env.REACT_APP_API_URL}/join_game`, requestOptions)
        .then(handleResponse)
        .then((game) => {
            return game;
        });
}

function createGame(name) {
    let user = JSON.parse(localStorage.getItem("user"));
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user, name }),
    };

    return fetch(`${process.env.REACT_APP_API_URL}/create_game`, requestOptions)
        .then(handleResponse)
        .then((uuid) => {
            return uuid;
        });
}

function quitGame() {
    let user = JSON.parse(localStorage.getItem("user"));
    // remove user from local storage to log user out
    localStorage.removeItem("user");
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user }),
    };

    return fetch(
        `${process.env.REACT_APP_API_URL}/quit_game`,
        requestOptions
    ).then(handleResponse);
}

function getUsers(code) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
    };

    return fetch(`${process.env.REACT_APP_API_URL}/get_users`, requestOptions)
        .then(handleResponse)
        .then((users) => {
            return users.users;
        });
}

function handleResponse(response) {
    return response.text().then((text) => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                quitGame();
                window.location.reload(true);
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}
