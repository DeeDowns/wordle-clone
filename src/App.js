import React, { useState, useEffect } from 'react';
import './App.css';
import Board from './components/Board'
import 'react-simple-keyboard/build/css/index.css';
import axios from 'axios';

const initialWordContainer = {
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
  6: "",  
}

const initialSquareColorsByIdx = {
  1: {
    'green': [],
    'yellow': [],
    'black': []
  },
  2: {
    'green': [],
    'yellow': [],
    'black': []
  },
  3: {
    'green': [],
    'yellow': [],
    'black': []
  },
  4: {
    'green': [],
    'yellow': [],
    'black': []
  },
  5: {
    'green': [],
    'yellow': [],
    'black': []
  },
  6: {
    'green': [],
    'yellow': [],
    'black': []
  }, 
}



function App() {
  const [ onRow, setOnRow ] = useState(1);
  const [ wordGuessed, setwordGuessed ] = useState(initialWordContainer);
  const [ wotd, setWotd ] = useState('')
  const [ squareColorsByIdx, setSquareColorsByIdx ] = useState(initialSquareColorsByIdx)

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
      wotd.split('').map((letter, idx) => {
        if (wotd[idx] === wordGuessed[onRow].split('')[idx]) {
          console.log(`turn ${wordGuessed[onRow].split('')[idx]} green`)
          let row = { ...squareColorsByIdx[onRow] }
          row.green.push(idx);
          setSquareColorsByIdx({...squareColorsByIdx, row })
        } else if (wotd[idx] !== wordGuessed[onRow].split('')[idx] && wotd.includes(wordGuessed[onRow].split('')[idx])) {
          console.log(`turn ${wordGuessed[onRow].split('')[idx]} yellow`)
          let row = { ...squareColorsByIdx[onRow] }
          row.yellow.push(idx);
          setSquareColorsByIdx({...squareColorsByIdx, row })
        } else {
          console.log(`turn ${wordGuessed[onRow].split('')[idx]} black`)
          let row = { ...squareColorsByIdx[onRow] }
          row.black.push(idx);
          setSquareColorsByIdx({...squareColorsByIdx, row })
        }
      })
      setOnRow(onRow + 1)
    }
  }

  console.log('ffff',squareColorsByIdx)

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

    useEffect(() => {
      axios.get('https://raw.githubusercontent.com/tabatkins/wordle-list/main/words')
      .then(res => {
        // console.log(res.data.split('\n'))
        setWotd(res.data.split('\n')[0])
      })
      .catch(err => console.log(err))
    }, [])

    console.log(wotd)


  return (
    <div className="App">
      <h1>Wordle Clone</h1>
      <Board 
        onKeyClick={onKeyClick}
        wordGuessed={wordGuessed}
        onRow={onRow}
        squareColorsByIdx={squareColorsByIdx}
      />
    </div>
  );
}

export default App;
