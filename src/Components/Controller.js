import React from 'react';
import GuessForm from "./GuessForm"
import {connect} from "react-redux";
// 
// - GuessWrongcol mapping for WrongLetters : PASS [WRONG LETTER STATE] stateslice: wrong letters
// - GuessesLeft number decrements for ever WRONG LETTER STATE ... count feature in that state stateslice: wrong letters count
// - CorrectLetter Component - looks at - letterIsIncluded Slice - if true, show letter, if false, show __
// - input form - onSub - trigger isLetterIncluded -> WRONG LETTER STATE

class Controller extends React.Component {
  constuctor(props){
    super(props);
    this.state ={
      isGuessFormVisible: false
    }
  }

  // handleClick = () => {
  //   const { dispatch } = this.props;
  //   const action = a.toggleForm();
  //   dispatch(action);
  // }

  handleSetGoalWord = (goalWord) => {
    //make an action, pass goalword into it
    // getState.goalWord(action)
  }

  handleCheckInclusion = (guessedLetter) => {
    //getGoalWord
    // cons isIncluded = action {goalword, guessed letter, type: isIncluded} - true/false
    if(isIncluded = true) {
      this.props.onCorrectGuess 
    }
  }


  setVisibility = () => {
    if(this.state.isGuessFormVisible === false) {
      return { component: <GoalForm onSettingGoalWord={this.handleSetGoalWord}/>}
    } else {
      return { component:
        <div>
          <GuessForm functionthatreturnsguessedletter={this.handleCheckInclusion} />
          <GuessedWrongCol />
          <WordToGuess letterGuessed={} />
        </div>}
    }
  }

  render(){
    currentlyVisible = setVisibility()
    return(
      <React.Fragment>
        <div>
          {currentlyVisible.component}
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    goalWord:  state.goalWord,
    letterIsIncluded:  state.letterIsIncluded,
    wrongLetters:  state.wrongLetters,
    isGuessFormVisible:  state.isGuessFormVisible
  }
}

Controller = connect(mapStateToProps)(Controller)

Controller.propTypes = {
  onCorrectGuess = PropTypes.func
}

export default Controller;