import React from 'react';
import PropTypes from 'prop-types';

//will take in a property of user input
function WrongLetter(props){
  return(
  <React.Fragment>
    <div style={{border: "2px solid orange"}}>
      <p>This is a wrongly guessed Letter(Prop will display here)</p>
    </div>
  </React.Fragment>
  );
}

WrongLetter.propTypes = {
  letter: PropTypes.string,
  id: PropTypes.string
}
export default WrongLetter;