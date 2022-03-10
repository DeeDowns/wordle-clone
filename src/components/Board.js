import Row from './Row'
import Keyboard from 'react-simple-keyboard';


const layout = {
    default: [
      "q w e r t y u i o p",
      "a s d f g h j k l",
      "{enter} z x c v b n m {bksp}",
    ],
}
function Board(props) {
    const { onKeyboardChange, onKeyPress } = props;

    return (
        <div className="board">
        <Row/>
        <Row/> 
        <Row/> 
        <Row/> 
        <Row/> 
        <Row/> 
        <Keyboard
            maxLength={5}
            layout={layout}
            onChange={onKeyboardChange}
            onKeyPress={onKeyPress}
        />
        </div>
    );
}

export default Board;