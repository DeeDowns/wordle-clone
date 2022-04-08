const charPlaces = [0,1,2,3,4]

function Row(props) {
    const { word, row, squareColors } = props
    console.log('fff', squareColors)

    return (
      <div className='row' id={`row-${row}`}>
          {charPlaces.map((char, index) => 
            word[char] ? ( 
          <div className={`filled ${squareColors[index]}`} id={`tile-${row}-${index + 1}`}>
                <p>{word[char]}</p>
            </div>
          ) : ( 
            <div className="empty" id={`tile-${row}-${index + 1}`}></div> 
          ))}
      </div>
    );
  }
  
  export default Row;