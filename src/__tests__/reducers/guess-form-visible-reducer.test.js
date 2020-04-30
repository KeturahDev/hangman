import guessFormVisibleReducer from "./../../reducers/guess-form-visible-reducer"

describe("guessFormVisibleReducer", () => {
  let action;
  test("should return default state", () => {
    expect(guessFormVisibleReducer(false, {type:null})).toEqual(false)
  })
  test("should return true when toggle action is passed in", () => {

    expect(guessFormVisibleReducer(false, action)).toEqual(true)
  })
})