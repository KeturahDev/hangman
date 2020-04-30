import React from 'react';
// 
// - GuessWrongcol mapping for WrongLetters : PASS [WRONG LETTER STATE] stateslice: wrong letters
// - GuessesLeft number decrements for ever WRONG LETTER STATE ... count feature in that state stateslice: wrong letters count
// - CorrectLetter Component - looks at - letterIsIncluded Slice - if true, show letter, if false, show __
// - input form - onSub - trigger isLetterIncluded -> WRONG LETTER STATE

class Controller extends React.Component {
  constuctor(props){
    super(props);
  }

  setVisibility = () => {
    if(getState... goalformvisible... true) {
      return {
        component: <GoalForm/>
      }
    }
  }

  render(){
    currentlyVisibleComponent = setVisibility()
    return(
      <React.Fragment>
        <div>
          {currentlyVisibleComponent}
        </div>
      </React.Fragment>
    );
  }
}