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
  1: {0: '', 1: '', 2: '', 3: '', 4: '' },
  2: {0: '', 1: '', 2: '', 3: '', 4: '' },
  3: {0: '', 1: '', 2: '', 3: '', 4: '' },
  4: {0: '', 1: '', 2: '', 3: '', 4: '' },
  5: {0: '', 1: '', 2: '', 3: '', 4: '' },
  6: {0: '', 1: '', 2: '', 3: '', 4: '' }, 
}


function App() {
  const [ onRow, setOnRow ] = useState(1);
  const [ wordGuessed, setwordGuessed ] = useState(initialWordContainer);
  const [ wotd, setWotd ] = useState('')
  const [ squareColorsByIdx, setSquareColorsByIdx ] = useState(initialSquareColorsByIdx)
  const [ winner, setWinner ] =useState('')
  
  const onCharSelected = value => {
    if (wordGuessed[onRow].length < 5) {
      setwordGuessed({...wordGuessed, [onRow] : wordGuessed[onRow] + value})
    } 
  }

  const onBackSpace =  () => {
    setwordGuessed({ ...wordGuessed, [onRow] : wordGuessed[onRow].slice(0, -1) })
  }

  // TODO: check if letter is in word more than once
  const onWordEnter = () => {
    
    let correctWordCount = 0
    if (wordGuessed[onRow].length === 5) {
      console.log('check if wordle',wordGuessed[onRow])
      for (let idx = 0; idx < wotd.split('').length; idx++) {
        if (wotd[idx] === wordGuessed[onRow].split('')[idx]) {
          console.log(`turn ${wordGuessed[onRow].split('')[idx]} index ${idx} green`)
          setSquareColorsByIdx(prevState => ({
            ...prevState, [onRow]: {
              ...prevState[onRow], [idx]: 'green' 
            }
          }));
          correctWordCount++;
        } else if (wotd[idx] !== wordGuessed[onRow].split('')[idx] && wotd.includes(wordGuessed[onRow].split('')[idx])) {
          console.log(`turn ${wordGuessed[onRow].split('')[idx]} index ${idx} yellow`)
          setSquareColorsByIdx(prevState => ({
            ...prevState, [onRow]: {
              ...prevState[onRow], [idx]: 'yellow' 
            }
          }));
        } else {
          console.log(`turn ${wordGuessed[onRow].split('')[idx]} index ${idx} black`)
          setSquareColorsByIdx(prevState => ({
            ...prevState, [onRow]: {
              ...prevState[onRow], [idx]: 'black' 
            }
          }));
        }
      }

      setOnRow(onRow + 1);
      correctWordCount = 0
      
      if(correctWordCount === 5) {
        alert('WINNER')
        setWinner(true);
        // setOnRow(1)
        // setwordGuessed(initialWordContainer)
        // getNewWord()
      }
      if (onRow === 6) {
        alert('you lost')
        setWinner(false);
        // setOnRow(1)
        // setwordGuessed(initialWordContainer)
        // getNewWord()
      }
    
     
      
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

  const getNewWord = () => {
    axios.get('https://raw.githubusercontent.com/tabatkins/wordle-list/main/words')
      .then(res => {
        let length = res.data.split('\n').length
        let randomNum = Math.floor(Math.random() * length)
        console.log(res.data.split('\n')[randomNum])
        setWotd(res.data.split('\n')[randomNum])
      })
      .catch(err => console.log(err))
  }

  console.log('word',wordGuessed, 'row',onRow, 'word length',wordGuessed.length)

    useEffect(() => {
      getNewWord();
    }, [])

    console.log('SQUARES',wotd, squareColorsByIdx)


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
