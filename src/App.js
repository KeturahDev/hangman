import React from 'react';
import './App.css';
import Header from './Components/Header';
import GuessForm from './Components/GuessForm';
import GuessedWrongCol from './Components/GuessedWrongCol';
import WordToGuess from './Components/WordToGuess';

function App() {
  return (
    <React.Fragment>
      <Header />
      <GuessForm />
      <GuessedWrongCol />
      <WordToGuess />
    </React.Fragment>
  );
}

export default App;
