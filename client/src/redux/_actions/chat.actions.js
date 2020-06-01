import { chatConstants } from "../_constants";

export const chatActions = {
    updateChatLog,
    cleanChat,
};

function updateChatLog(update) {
    return {
        type: chatConstants.UPDATE_CHAT_LOG,
        update,
    };
}

function cleanChat() {
    return {
        type: chatConstants.CLEAN_CHAT_LOG,
    };
}
