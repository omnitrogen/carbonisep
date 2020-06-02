import { userConstants } from "../_constants";
import { userService } from "../_services";
import { alertActions } from ".";
import { history } from "../_helpers";

export const userActions = {
    login,
    logout,
    register,
    getQuiz,
    sendQuiz,
    getActions,
    clearQuiz,
};

function login(username, password) {
    return (dispatch) => {
        dispatch(request({ username }));

        userService.login(username, password).then(
            (user) => {
                dispatch(success(user));
                history.push("/");
                dispatch(alertActions.success("Login successful"));
            },
            (error) => {
                dispatch(failure(error.toString()));
                dispatch(alertActions.error(error.toString()));
            }
        );
    };

    function request(user) {
        return { type: userConstants.LOGIN_REQUEST, user };
    }
    function success(user) {
        return { type: userConstants.LOGIN_SUCCESS, user };
    }
    function failure(error) {
        return { type: userConstants.LOGIN_FAILURE, error };
    }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function register(user) {
    return (dispatch) => {
        dispatch(request(user));

        userService.register(user).then(
            (user) => {
                dispatch(success());
                history.push("/login");
                dispatch(alertActions.success("Registration successful"));
            },
            (error) => {
                dispatch(failure(error.toString()));
                dispatch(alertActions.error(error.toString()));
            }
        );
    };

    function request(user) {
        return { type: userConstants.REGISTER_REQUEST, user };
    }
    function success(user) {
        return { type: userConstants.REGISTER_SUCCESS, user };
    }
    function failure(error) {
        return { type: userConstants.REGISTER_FAILURE, error };
    }
}

function getQuiz() {
    return (dispatch) => {
        dispatch(request());

        userService.getQuiz().then(
            (quiz) => {
                dispatch(success(quiz));
                // history.push("/tips");
                // dispatch(alertActions.success("Quiz successfully filled!"));
            },
            (error) => {
                dispatch(failure(error.toString()));
                dispatch(alertActions.error(error.toString()));
            }
        );
    };

    function request() {
        return { type: userConstants.GET_QUIZ_REQUEST };
    }
    function success(quiz) {
        return { type: userConstants.GET_QUIZ_SUCCESS, quiz };
    }
    function failure(error) {
        return { type: userConstants.GET_QUIZ_FAILURE, error };
    }
}

function sendQuiz(letter) {
    return (dispatch) => {
        dispatch(request(letter));

        userService.sendQuiz(letter).then(
            (letter) => {
                dispatch(success(letter));
                history.push("/tips");
                dispatch(alertActions.success("Quiz successfully filled!"));
            },
            (error) => {
                dispatch(failure(error.toString()));
                dispatch(alertActions.error(error.toString()));
            }
        );
    };

    function request(letter) {
        return { type: userConstants.SEND_QUIZ_REQUEST, letter };
    }
    function success(letter) {
        return { type: userConstants.SEND_QUIZ_SUCCESS, letter };
    }
    function failure(error) {
        return { type: userConstants.SEND_QUIZ_FAILURE, error };
    }
}

function getActions(letter) {
    return (dispatch) => {
        dispatch(request(letter));

        userService.getActions(letter).then(
            (actions) => {
                dispatch(success(actions));
            },
            (error) => {
                dispatch(failure(error.toString()));
                dispatch(alertActions.error(error.toString()));
            }
        );
    };

    function request(letter) {
        return { type: userConstants.GET_ACTIONS_REQUEST, letter };
    }
    function success(actions) {
        return { type: userConstants.GET_ACTIONS_SUCCESS, actions };
    }
    function failure(error) {
        return { type: userConstants.GET_ACTIONS_FAILURE, error };
    }
}

function clearQuiz() {
    return (dispatch) => {
        dispatch(clear());
    };
    function clear() {
        return { type: userConstants.QUIZ_CLEAR };
    }
}
