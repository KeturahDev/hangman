import goalWordReducer from "./../../reducers/goal-word-reducer";

describe("goalWordReducer", () => {
  test("Should return default state", () => {
    expect(goalWordReducer({}, {type:null})).toEqual({})
  })

  let action;
  const goalWord = {
    word: "Testword"
  };

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

  test("Should return true if user's input is included in goal word", () => {
    
    expect(goalWordReducer({}, action)).toEqual({ word: "Testword", included: true })
  })
});

