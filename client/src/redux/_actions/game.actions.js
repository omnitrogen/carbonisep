import { gameConstants } from "../_constants";
import { gameService } from "../_services";
import { alertActions } from ".";
import { history } from "../_helpers";

export const gameActions = {
    joinGame,
    createGame,
    quitGame,
    updateUsers,
};

function joinGame(uuid) {
    return (dispatch) => {
        dispatch(request(uuid));

        gameService.joinGame(uuid).then(
            (game) => {
                dispatch(success(game));
                history.push("/lobby");
                dispatch(
                    alertActions.success(
                        "You've successfully joined the game lobby."
                    )
                );
            },
            (error) => {
                dispatch(failure(error.toString()));
                dispatch(alertActions.error(error.toString()));
            }
        );
    };

    function request(uuid) {
        return { type: gameConstants.JOIN_GAME_REQUEST, uuid };
    }
    function success(game) {
        return { type: gameConstants.JOIN_GAME_SUCCESS, game };
    }
    function failure(error) {
        return { type: gameConstants.JOIN_GAME_FAILURE, error };
    }
}

function createGame(name) {
    return (dispatch) => {
        dispatch(request(name));

        gameService.createGame(name).then(
            (game) => {
                dispatch(success(game));
                history.push("/lobby");
                dispatch(alertActions.success("Game created successfully!"));
            },
            (error) => {
                dispatch(failure(error.toString()));
                dispatch(alertActions.error(error.toString()));
            }
        );
    };

    function request(name) {
        return { type: gameConstants.CREATE_GAME_REQUEST, name };
    }
    function success(game) {
        return { type: gameConstants.CREATE_GAME_SUCCESS, game };
    }
    function failure(error) {
        return { type: gameConstants.CREATE_GAME_FAILURE, error };
    }
}

function quitGame() {
    return (dispatch) => {
        dispatch(request());

        gameService.quitGame().then(
            () => {
                // should set some isAdmin to true in da state when the user create a game
                dispatch(success());
                history.push("/");
                dispatch(
                    alertActions.success("You've successfuly left the game!")
                );
            },
            (error) => {
                dispatch(failure(error.toString()));
                dispatch(alertActions.error(error.toString()));
            }
        );
    };

    function request(name) {
        return { type: gameConstants.QUIT_GAME_REQUEST };
    }
    function success() {
        return { type: gameConstants.QUIT_GAME_SUCCESS };
    }
    function failure(error) {
        return { type: gameConstants.QUIT_GAME_FAILURE, error };
    }
}

function updateUsers(uuid) {
    return (dispatch) => {
        dispatch(request(uuid));

        gameService.getUsers(uuid).then(
            (users) => {
                dispatch(success(users));
            },
            (error) => {
                dispatch(failure(error.toString()));
                dispatch(alertActions.error(error.toString()));
            }
        );
    };

    function request(uuid) {
        return { type: gameConstants.UPDATE_USERS_REQUEST, uuid };
    }
    function success(users) {
        return { type: gameConstants.UPDATE_USERS_SUCCESS, users };
    }
    function failure(error) {
        return { type: gameConstants.UPDATE_USERS_FAILURE, error };
    }
}
