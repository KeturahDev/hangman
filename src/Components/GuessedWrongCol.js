import React from "react";
import PropTypes from "prop-types";
import WrongLetter from "./WrongLetter";
import GuessesLeft from "./GuessesLeft";

function GuessedWrongCol(props){
  const colStyle = {
    border: "2px solid Red"
  }
  return(
    <React.Fragment>
      <hr/>
      {/* {Object.values(props.guessedWrongList).map((wrongLetter) => {
        return <WrongLetter
        WhenWrongLetterClicked = { props.onWrongLetterSelection }
        letter = {wrongLetter.letter}
        id={wrongLetter.id}
        key={wrongLetter.id}/> */}
      {/* })} */}
      <div style={colStyle}>
        <p>Column holding guessed letters</p>
        <GuessesLeft />
        <WrongLetter />
      </div>
    </React.Fragment>
  );
}

GuessedWrongCol.propTypes = {
  guessedWrongList: PropTypes.object,
  onWrongLetterSelection: PropTypes.func
};

export default GuessedWrongCol;