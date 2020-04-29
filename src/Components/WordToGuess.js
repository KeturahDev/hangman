import React from 'react';
import CorrectLetter from "./CorrectLetter"

function WordToGuess(props){
  return (
    <React.Fragment>
      <div style={{border: "2px solid green"}}>
      <p>This is where the correct letters will be stored</p>
      {/* Letter components in here will always be in the same place and have the same amount.. not impacted by state */}
      <CorrectLetter />
      </div>
    </React.Fragment>
  );
}

export default WordToGuess