import { combineReducers } from "redux";

import { authentication } from "./authentication.reducer";
import { registration } from "./registration.reducer";
import { game } from "./game.reducer";
import { quiz } from "./quiz.reducer";
import { alert } from "./alert.reducer";

const rootReducer = combineReducers({
    authentication,
    registration,
    game,
    quiz,
    alert,
});

export default rootReducer;
