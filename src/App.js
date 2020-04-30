import React from 'react';
import './App.css';
import Header from './Components/Header';
import GuessForm from './Components/GuessForm';
import GuessedWrongCol from './Components/GuessedWrongCol';
import WordToGuess from './Components/WordToGuess';

class App extends React.Component() {
  constructor(props) {
    super(props)
  }

  handlePassCorrectLetter = (letter) => {
    //
  }

  render(){
    return (
      <React.Fragment>
        <Header />
        <Controller onCorrectGuess={handlePassCorrectLetter}/>
        
      </React.Fragment>
    );
  }
}

export default App;
