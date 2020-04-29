import letterCheckReducer from "./letter-check-reducer";
import goalWordReducer from "./goal-word-reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    goalWord: goalWordReducer,
    letterIsIncluded: letterCheckReducer
});

export default rootReducer;