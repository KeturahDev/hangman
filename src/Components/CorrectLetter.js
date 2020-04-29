import React from "react";
import PropTypes from "prop-types";

function CorrectLetter(){

  return(
    <React.Fragment>
      <div style={{border: "2px solid purple"}}>
        <p>WORD: Display either [___] or [ Letter ]</p>
      </div>
    </React.Fragment>
  );
}

CorrectLetter.propTypes = {
  letter: PropTypes.string
}

export default CorrectLetter;