import React, { useState } from 'react';
import './App.css';
import Board from './components/Board'
import 'react-simple-keyboard/build/css/index.css';

// const wordsArr = [
//   new Array(5),
//   new Array(5),
//   new Array(5),
//   new Array(5),
//   new Array(5),
//   new Array(5),
// ]

// const initialWordContainer = {
//   1: new Array(5),
//   2: new Array(5),
//   3: new Array(5),
//   4: new Array(5),
//   5: new Array(5),
//   6: new Array(5),  
// }

function App() {
  const [ guess, setGuess ] = useState(0);
  const [ wordGuess, setWordGuess ] = useState('');

 

  const onCharSelected = value => {
    if (wordGuess.length <= 5) {
      setWordGuess(wordGuess + value)
    } 
  }

  const onBackSpace =  () => {
    setWordGuess(wordGuess.slice(0, -1))
  }

  const onWordEnter = () => {
    console.log('check if wordle',wordGuess)
  }

  const onKeyClick = event => {
    const { value } = event.target
    if (value === 'bksp') {
      // console.log('delete')
      onBackSpace()
    } else if (value === 'enter') {
      // console.log(wordGuess)
      onWordEnter()
    } else {
      // console.log(value)
      onCharSelected(value)
    }
  }

  console.log('word',wordGuess)


  return (
    <div className="App">
      <h1>Wordle Clone</h1>
      <Board 
        onKeyClick={onKeyClick}
      />
    </div>
  );
}

export default App;
