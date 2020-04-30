import goalWordReducer from "./../../reducers/goal-word-reducer";
import letterCheckReducer from "./../../reducers/letter-check-reducer";

describe("goalWordReducer", () => {
  test("Should return default state", () => {
    expect(goalWordReducer({}, {type:null})).toEqual({})
  })

  let action;
  const goalWord = {
    word: "Testword"
  };
  const userInput = "e"

  test("Should set goal word", () => {
    const { word } = goalWord;
    action = {
      type: 'SET_GOALWORD',
      word: word
    };

    expect(goalWordReducer({}, action)).toEqual({
      word: "Testword"
    })
  });
});

describe("letterCheckReducer", () => {
  let action
  const getState = "Testword"
  const userInput = "e"
  test("Should return true if user's input is included in goal word", () => {
    action = {
      type: "CHECK_INCLUSION",
      letter: userInput,
      word: getState
    }
    expect(letterCheckReducer({}, action)).toEqual({ included: true })
  })
})
///test