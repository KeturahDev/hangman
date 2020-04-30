import rootReducer from "./../../reducers/index";
import goalWordReducer from "./../../reducers/goal-word-reducer.js";
import letterCheckReducer from "./../../reducers/letter-check-reducer.js";
import { createStore } from 'redux';

let store = createStore(rootReducer);

describe("rootReducer", () => {
  test("Should return same default state as original reducer", () => {
    expect(rootReducer({}, { type: null })).toEqual({
        goalWord: {},
        letterIsIncluded: false,
        wrongLetters: {},
        isGuessFormVisible: false
    });
  });

  test("Check that initial state of goalWordReducer matches root reducer", () => {
    expect(store.getState().goalWord).toEqual(goalWordReducer(undefined, { type: null }));
  });

  test("Check that initial state of letterCheckReducer matches root reducer", () => {
    expect(store.getState().letterIsIncluded).toEqual(goalWordReducer(false, { type: null }));
  });
  
});