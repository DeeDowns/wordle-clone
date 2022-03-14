import Row from './Row'
import Keyboard from './Keyboard';

function Board(props) {
    const { onKeyClick, currWord, onRow } = props;

    return (
        <div className="board">
            <Row word={currWord[1]}/>
            <Row word={currWord[2]}/> 
            <Row word={currWord[3]}/> 
            <Row word={currWord[4]}/> 
            <Row word={currWord[5]}/> 
            <Row word={currWord[6]}/> 
            <Keyboard onKeyClick={onKeyClick}/>
        </div>
    );
}

export default Board;