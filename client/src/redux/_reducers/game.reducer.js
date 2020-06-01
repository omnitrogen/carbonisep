import { gameConstants } from "../_constants";
import { chatConstants } from "../_constants";

export function game(
    state = {
        chatLog: [],
        joiningGame: false,
        inLobby: false,
        isGameAdmin: false,
        name: "",
        uuid: "",
        updatingUsers: false,
        users: [],
    },
    action
) {
    switch (action.type) {
        // Create game cases
        case gameConstants.CREATE_GAME_REQUEST:
            return Object.assign({}, state, {
                creatingGame: true,
                name: action.name,
            });
        case gameConstants.CREATE_GAME_SUCCESS:
            return Object.assign({}, state, {
                creatingGame: false,
                inLobby: true,
                isGameAdmin: true,
                uuid: action.game.uuid,
            });
        case gameConstants.CREATE_GAME_FAILURE:
            return Object.assign({}, state, {});

        // Join game cases
        case gameConstants.JOIN_GAME_REQUEST:
            return Object.assign({}, state, {
                joiningGame: true,
                uuid: action.uuid,
            });
        case gameConstants.JOIN_GAME_SUCCESS:
            return Object.assign({}, state, {
                joiningGame: false,
                inLobby: true,
                isGameAdmin: false,
                name: action.game.gameName,
            });
        case gameConstants.JOIN_GAME_FAILURE:
            return Object.assign({}, state, {});

        // Quit game cases
        case gameConstants.QUIT_GAME_REQUEST:
            return {
                quitingGame: true,
            };
        case gameConstants.QUIT_GAME_SUCCESS:
            return Object.assign({}, state, {});
        case gameConstants.QUIT_GAME_FAILURE:
            return Object.assign({}, state, {});

        // Update users cases
        case gameConstants.UPDATE_USERS_REQUEST:
            return Object.assign({}, state, {
                updatingUsers: true,
            });
        case gameConstants.UPDATE_USERS_SUCCESS:
            // if (state.uuid !== null && action.payload.uuid === state.uuid) {
            //     return Object.assign({}, state, {
            //         updatingUsers: false,
            //         users: [...state.users, action.payload.user.username],
            //     });
            // } else return Object.assign({}, state, {});
            return Object.assign({}, state, {
                updatingUsers: false,
                users: action.users,
            });
        case gameConstants.UPDATE_USERS_FAILURE:
            return Object.assign({}, state, {});

        // Update chat log case
        case chatConstants.UPDATE_CHAT_LOG:
            if (state.uuid !== null && action.update.roomId === state.uuid)
                return Object.assign({}, state, {
                    chatLog: [...state.chatLog, action.update.data],
                });
            else return Object.assign({}, state, {});

        // Clean chat log case
        case chatConstants.CLEAN_CHAT_LOG:
            return Object.assign({}, state, {
                chatLog: [],
            });

        default:
            return state;
    }
}
