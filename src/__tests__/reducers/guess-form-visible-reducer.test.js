import guessFormVisibleReducer from "./../../reducers/guess-form-visible-reducer"

describe("guessFormVisibleReducer", () => {
  test("should return default state", () => {
    expect(guessFormVisibleReducer(false, {type:null})).toEqual(false)
  })
})