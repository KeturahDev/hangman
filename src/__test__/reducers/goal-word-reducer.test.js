import goalWordReducer from "./../../reducers/goal-word-reducer";

describe("goalWordReducer", () => {
  test("Should return default state", () => {
    expect(goalWordReducer({}, {type:null})).toEqual({})
  })
})