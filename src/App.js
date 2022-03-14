import React, { useState } from 'react';
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
  const [ wordGuessed, setwordGuessed ] = useState(initialWordContainer);

  const onCharSelected = value => {
    if (wordGuessed[onRow].length < 5) {
      setwordGuessed({...wordGuessed, [onRow] : wordGuessed[onRow] + value})
    } 
  }

  const onBackSpace =  () => {
    setwordGuessed({...wordGuessed, [onRow] : wordGuessed[onRow].slice(0, -1)})
  }

  const onWordEnter = () => {
    if (wordGuessed[onRow].length === 5) {
      console.log('check if wordle',wordGuessed[onRow])
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

  console.log('word',wordGuessed, 'row',onRow, 'word length',wordGuessed.length)



  return (
    <div className="App">
      <h1>Wordle Clone</h1>
      <Board 
        onKeyClick={onKeyClick}
        wordGuessed={wordGuessed}
        onRow={onRow}
      />
    </div>
  );
}

export default App;
