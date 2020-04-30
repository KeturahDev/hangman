import letterCheckReducer from "./letter-check-reducer";
import goalWordReducer from "./goal-word-reducer";
import wrongLettersReducer from "./wrong-letters-reducer"
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    goalWord: goalWordReducer,
    letterIsIncluded: letterCheckReducer,
    wrongLetters: wrongLettersReducer
});

export default rootReducer;