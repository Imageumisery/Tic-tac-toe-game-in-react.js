import Button from './Button'


const Board = () => {
    const [squares, setsquares] = useState(Array(9).fill(null));

  return (
          <>
            <div className="board-row">
              <Button value = {squares[0]}/>
              <Button value = {squares[1]}/>
              <Button value = {squares[2]}/>
            </div>
            <div className="board-row">
              <Button value = {squares[3]}/>
              <Button value = {squares[4]}/>
              <Button value = {squares[5]}/>
            </div>
            <div className="board-row">
              <Button value = {squares[6]}/>
              <Button value = {squares[7]}/>
              <Button value = {squares[8]}/>
            </div>
          </>
  )
}

export default Board