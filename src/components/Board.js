import Row from './Row'
import Keyboard from './Keyboard';

function Board(props) {
    const { onKeyClick, wordGuessed } = props;

    return (
        <div className="board">
            <Row 
                word={wordGuessed[1]}
                row={1}
            />
            <Row 
                word={wordGuessed[2]}
                row={2}/> 
            <Row 
                word={wordGuessed[3]}
                row={3}
            /> 
            <Row 
                word={wordGuessed[4]}
                row={4}
            /> 
            <Row 
                word={wordGuessed[5]}
                row={5}
            /> 
            <Row 
                word={wordGuessed[6]}
                row={6}
            /> 
            <Keyboard onKeyClick={onKeyClick}/>
        </div>
    );
}

export default Board;