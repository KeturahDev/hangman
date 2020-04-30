import letterCheckReducer from "./letter-check-reducer";
import goalWordReducer from "./goal-word-reducer";
import wrongLettersReducer from "./wrong-letters-reducer"
import guessFormVisibleReducer from "./guess-form-visible-reducer"
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    goalWord: goalWordReducer,
    letterIsIncluded: letterCheckReducer,
    wrongLetters: wrongLettersReducer,
    isGuessFormVisible: guessFormVisibleReducer,
});

export default rootReducer;