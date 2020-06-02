import { userConstants } from "../_constants";

let letter = localStorage.getItem("quiz");
const initialState =
    letter != null
        ? {
              hasAnsweredToQuiz: true,
              letter: letter,
              quiz: [],
              actions: { actions: [] },
          }
        : {
              hasAnsweredToQuiz: false,
              letter: null,
              quiz: [],
              actions: { actions: [] },
          };

export function quiz(state = initialState, action) {
    switch (action.type) {
        case userConstants.GET_QUIZ_REQUEST:
            return Object.assign({}, state, {});
        case userConstants.GET_QUIZ_SUCCESS:
            if (action.quiz.quiz !== state.quiz) {
                return Object.assign({}, state, { quiz: action.quiz.quiz });
            } else return Object.assign({}, state, {});
        case userConstants.GET_QUIZ_FAILURE:
            return Object.assign({}, state, {});

        case userConstants.SEND_QUIZ_REQUEST:
            return Object.assign({}, state, {});
        case userConstants.SEND_QUIZ_SUCCESS:
            return Object.assign({}, state, {
                hasAnsweredToQuiz: true,
                letter: action.letter.letter,
            });
        case userConstants.SEND_QUIZ_FAILURE:
            return Object.assign({}, state, {});

        case userConstants.GET_ACTIONS_REQUEST:
            return Object.assign({}, state, {});
        case userConstants.GET_ACTIONS_SUCCESS:
            return Object.assign({}, state, {
                actions: action.actions,
            });
        case userConstants.GET_ACTIONS_FAILURE:
            return Object.assign({}, state, {});

        case userConstants.QUIZ_CLEAR:
            return initialState;

        default:
            return state;
    }
}
