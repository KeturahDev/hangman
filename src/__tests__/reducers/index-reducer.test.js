import rootReducer from "./../../reducers/index";
import goalWordReducer from "./../../reducers/goal-word-reducer.js";
import letterCheckReducer from "./../../reducers/letter-check-reducer.js";

describe("rootReducer", () => {
  test("Should return same default state as original reducer", () => {
    expect(rootReducer({}, { type: null })).toEqual({
        goalWord: {},
        letterIsIncluded: false
    });
  });
});