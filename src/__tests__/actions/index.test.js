import * as actions from './../../actions';

describe('hangman actions', () => {
  it('setGoalWord should create SET_GOALWORD action', () =>{
    expect(actions.setGoalWord()).toEqual({
      type: 'SET_GOALWORD'
    });
  });

  it('toggleFrom should create TOGGLE_FORM action', () => {
  expect(actions.toggleForm()).toEqual({
    type: 'TOGGLE_FORM'
    });
  });

  it('checkInclusion should create CHECK_INCLUSION action', () => {
    expect(actions.checkInclusion({userInput: "k", goalWord: "kite"})).toEqual({
      type: 'CHECK_INCLUSION',
      userInput: "k",
      goalWord: "kite"
    });
  });

    it('addLetter should create ADD_LETTER action', () => {
    expect(actions.addLetter({letter: "k"})).toEqual({
      type: 'ADD_LETTER',
      letter: 'k'
    });
  });

});
