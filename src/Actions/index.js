export const setGoalWord = id => ({
  type: 'SET_GOALWORD',
  id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM',
});

export const checkInclusion = (submission) => {
  const { userInput, goalWord } = submission;
  return {
    type: 'CHECK_INCLUSION',
    userInput: userInput,
    goalWord: goalWord,
  }
}

export const addLetter = (letterAdded) => {
  const { letter } = letterAdded;
  return {
    type: 'ADD_LETTER',
    letter: letter,
  }
}