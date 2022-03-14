const holder = [0,1,2,3,4]

function Row(props) {
    const { word } = props

    return (
      <div className="row">
          {holder.map(char => word[char] ?
            (<div className="tile" id='1'>
                <p>{word[char]}</p>
            </div>) 
            :
             (<div className="tile" id='1'></div> )  
          )}
        {/* <div className="tile" id='1'>
            <p>Letter</p>
        </div>
        <div className="tile" id='2'>
            <p>Letter</p>
        </div>
        <div className="tile" id='3'>
            <p>Letter</p>
        </div>
        <div className="tile" id='4'>
            <p>Letter</p>
        </div>
        <div className="tile" id='5'>
            <p>Letter</p>
        </div> */}
      </div>
    );
  }
  
  export default Row;