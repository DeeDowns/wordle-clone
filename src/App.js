import React, { useState, useRef } from 'react';
import './App.css';
import Board from './components/Board'
import 'react-simple-keyboard/build/css/index.css';

const initialWordContainer = {
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
  6: "",  
}

function App() {
  const [ onRow, setOnRow ] = useState(1);
  const [ currWord, setCurrWord ] = useState(initialWordContainer);

  const onCharSelected = value => {
    if (currWord[onRow].length < 5) {
      setCurrWord({...currWord, [onRow] : currWord[onRow] + value})
    } 
  }

  const onBackSpace =  () => {
    setCurrWord({...currWord, [onRow] : currWord[onRow].slice(0, -1)})
  }

  const onWordEnter = () => {
    if (currWord[onRow].length === 5) {
      console.log('check if wordle',currWord[onRow])
      setOnRow(onRow + 1)
    }
  }

  const onKeyClick = event => {
    const { value } = event.target
    if (value === 'bksp') {
      onBackSpace()
    } else if (value === 'enter') {
      onWordEnter()
    } else {
      onCharSelected(value)
    }
  }

  console.log('word',currWord, 'row',onRow, 'word length',currWord.length)



  return (
    <div className="App">
      <h1>Wordle Clone</h1>
      <Board 
        onKeyClick={onKeyClick}
        currWord={currWord}
        onRow={onRow}
      />
    </div>
  );
}

export default App;
