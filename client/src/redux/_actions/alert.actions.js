import { alertConstants } from "../_constants";

export const alertActions = {
    success,
    error,
    clear,
};

function success(message) {
    return (dispatch) => {
        dispatch(successMessage(message));
        setTimeout(() => {
            dispatch(clearMessage());
        }, 8000);
    };

    function successMessage(message) {
        return { type: alertConstants.SUCCESS, message };
    }
    function clearMessage() {
        return { type: alertConstants.CLEAR };
    }
}

function error(message) {
    return (dispatch) => {
        dispatch(errorMessage(message));
        setTimeout(() => {
            dispatch(clearMessage());
        }, 8000);
    };

    function errorMessage(message) {
        return { type: alertConstants.ERROR, message };
    }
    function clearMessage() {
        return { type: alertConstants.CLEAR };
    }
}

function clear() {
    return { type: alertConstants.CLEAR };
}
