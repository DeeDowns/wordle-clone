import React, { useState } from 'react';
import './App.css';
import Board from './components/Board'
import 'react-simple-keyboard/build/css/index.css';

const wordsArr = [
  new Array(5),
  new Array(5),
  new Array(5),
  new Array(5),
  new Array(5),
  new Array(5),
]

const initialWordContainer = {
  1: new Array(5),
  2: new Array(5),
  3: new Array(5),
  4: new Array(5),
  5: new Array(5),
  6: new Array(5),  
}

function App() {
  const [wordNumber, setWordNumber] = useState(1);
  const [wordContainer, setWordContainer] = useState(initialWordContainer)


  const onKeyboardChange = input => {
    console.log(input)
    console.log(wordContainer[wordNumber])
  }

  const onKeyPress = button => {
    console.log(button)
    if (button === '{enter}') {
      setWordNumber(wordNumber + 1)
    }
  }


  console.log(wordNumber, wordContainer)
  return (
    <div className="App">
      <h1>Wordle Clone</h1>
      <Board 
        onKeyboardChange={onKeyboardChange}
        onKeyPress={onKeyPress}
      />
    </div>
  );
}

export default App;
