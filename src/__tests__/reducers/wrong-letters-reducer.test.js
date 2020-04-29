import wrongLettersReducer from "./../../reducers/wrong-letters-reducer";

describe("wrongLettersReducer", () => {
  test("Should return default state", () => {
    expect(wrongLettersReducer({}, {type: null})).toEqual({})
  })
})