import React from 'react'

function Key(props) {
    const { charKey,  onKeyClick, value } = props;


    return (
        <div className="key">
            <button onClick={onKeyClick} name={charKey} value={value}>{charKey}</button>
        </div>
    );
}

export default Key;