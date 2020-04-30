import guessFormVisibleReducer from "./../../reducers/guess-form-visible-reducer"
import * as c from "./../../Actions/ActionTypes"

describe("guessFormVisibleReducer", () => {
  let action;
  test("should return default state", () => {
    expect(guessFormVisibleReducer(false, {type:null})).toEqual(false)
  })
  test("should return true when toggle action is passed in", () => {
    action = {
      type: c.TOGGLE_FORM
    }
    expect(guessFormVisibleReducer(false, action)).toEqual(true)
  })
})
//test