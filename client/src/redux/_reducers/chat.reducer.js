import { chatConstants } from "../_constants";
import { store } from "redux/_helpers";

export function chat(state = { chatLog: [] }, action) {
    switch (action.type) {
        case chatConstants.UPDATE_CHAT_LOG:
            const gameUuid = action.gameUuid;
            if (gameUuid !== null && action.update.roomId === gameUuid)
                return Object.assign({}, state, {
                    chatLog: [...state.chatLog, action.update.data],
                });
        default:
            return state;
    }
}
