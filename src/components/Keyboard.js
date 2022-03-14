import Key from './Key';


const keyboardLayout = {
    "rowOne": ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    "rowTwo": ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    "rowThree": ["enter", "z", "x", "c", "v", "b", "n", "m", "bksp"],
}

function Keyboard(props) {
    const { onKeyClick } = props;


    return (
        <div className="keyboard">
            <div className="row">
                {keyboardLayout["rowOne"].map(char => (
                    <Key 
                        charKey={char}
                        value={char}
                        onKeyClick={onKeyClick}
                    />
                ))}
            </div>
            <div className="row">
                {keyboardLayout["rowTwo"].map(char => (
                    <Key 
                        charKey={char}
                        value={char}
                        onKeyClick={onKeyClick}
                    />
                ))}
            </div>
            <div className="row">
                {keyboardLayout["rowThree"].map(char => (
                    <Key 
                        charKey={char}
                        value={char}
                        onKeyClick={onKeyClick}
                    />
                ))}
            </div>
        </div>
    );
}

export default Keyboard;