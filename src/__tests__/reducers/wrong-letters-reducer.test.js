import wrongLettersReducer from "./../../reducers/wrong-letters-reducer";
// import v4 from 'uuid'

describe("wrongLettersReducer", () => {
  // const userInput = "k"
  // const userInput2 = "z"
  const userInput = {letter: "k", id: 1}
  const userInput2 = {letter: "z", id: 2}
  let action;

  const state1 = {1: { letter: "k", id: 1}}

  test("Should return default state", () => {
    expect(wrongLettersReducer({}, {type: null})).toEqual({})
  })
  test("Should add wrong letter", () => {
    const { letter, id} = userInput

    action = {
      type: "ADD_LETTER",
      letter: letter,
      id: id
    }
    expect(wrongLettersReducer({}, action)).toEqual({ 1: { letter: "k", id: 1} })
  })
  test("Should return list of wrong letters", () => {
    const { letter, id} = userInput2 
    const action2 = {
      type: "ADD_LETTER",
      letter, //short hand for above
      id
    }
    expect(wrongLettersReducer(state1, action2)).toEqual({
      1: { letter: "k",
            id: 1
          },
      2: { letter: "z",
            id: 2
          }
    })
  })
})
//test