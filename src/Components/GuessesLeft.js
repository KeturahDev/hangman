import React from 'react';

function GuessesLeft(){
  return(
    <React.Fragment>
      <div style={{border: "2px solid blue"}}> 
        <p>This will be a number starting at 10 that decreases with every incorrect guess</p>
      </div>
    </React.Fragment>
  );
}

export default GuessesLeft;