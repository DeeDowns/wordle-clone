import React from 'react'

function Key(props) {
    const { charKey,  onKeyClick, value } = props;


    return (
        <div className="key">
            {charKey === 'bksp' || charKey === 'enter' ? 
                <button 
                    onClick={onKeyClick} 
                    name={charKey} 
                    value={value}
                    className='action'
                    >
                        {charKey}
                </button>
            :
                <button 
                    onClick={onKeyClick} 
                    name={charKey} 
                    value={value}
                    >
                        {charKey}
                </button>
            }
        </div>
    );
}

export default Key;