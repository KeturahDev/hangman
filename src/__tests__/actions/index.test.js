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

});
