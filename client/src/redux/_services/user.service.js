import { authHeader } from "../_helpers";

export const userService = {
    login,
    logout,
    register,
    getQuiz,
    sendQuiz,
    getActions,
};

function login(username, password) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    };

    return fetch(
        `${process.env.REACT_APP_API_URL}/authenticate`,
        requestOptions
    )
        .then(handleResponse)
        .then((user) => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("quiz", user.letter);
            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("user");
    localStorage.removeItem("quiz");
}

function register(user) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
    };

    return fetch(
        `${process.env.REACT_APP_API_URL}/register`,
        requestOptions
    ).then(handleResponse);
}

function getQuiz() {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
    };
    return fetch(`${process.env.REACT_APP_API_URL}/get_quiz`, requestOptions)
        .then(handleResponse)
        .then((quiz) => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            return quiz;
        });
}

function sendQuiz(letter) {
    let user = JSON.parse(localStorage.getItem("user"));

    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user, letter }),
    };

    return fetch(`${process.env.REACT_APP_API_URL}/send_quiz`, requestOptions)
        .then(handleResponse)
        .then((letter) => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem("quiz", letter.letter);
            return letter;
        });
}

function getActions(letter) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ letter }),
    };

    return fetch(`${process.env.REACT_APP_API_URL}/get_actions`, requestOptions)
        .then(handleResponse)
        .then((actions) => {
            return actions;
        });
}

function handleResponse(response) {
    return response.text().then((text) => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                window.location.reload(true);
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}
