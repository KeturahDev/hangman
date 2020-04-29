export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_GOALWORD':
      const { word } = action;
      return Object.assign({}, state, {
        word: word
      });
    default:
      return state;
  }
};

// Redux States:
// -----------
// setting goal word (first input a form)
// Add_Wrong_Guess .. add new letter to GuessedWrongColumn | edgecase: make sure users input is only 1 char and NaN
// ShowLetter ... toggle letter visibility in WordToGuess>Letter
// GameStart ... checks to see if game has started yet and if the 2nd player can start guessing [determined by exisitence of goalWord]
// GameEnd - triggers when local state counter reaches zero

//Local State
// ----
// decrementing guesses left

// reducer: 1

//Actions:
//----------
// 1 - deals with gameword 
// -creating it 
// -comparing it to either addWrongLetter or showLetter