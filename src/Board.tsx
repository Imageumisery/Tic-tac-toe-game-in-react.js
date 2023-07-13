import Button from "./Button";

const Board = ({ xIsNext, squares, onPlay }) => {
    const gameResult = calculateWinner(squares);
    const resultClass = "result";
    const win = "win";
    let status;
    if (gameResult) {
        status = "Winner: " + gameResult;
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }

    const handleClick = function (i: number) {
        const newSquares = squares.slice();
        if (squares[i] | !gameResult) {
            newSquares[i] = xIsNext ? "x" : "o";
            onPlay(newSquares);
        }
    };
    calculateWinner(squares);

    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }
    return (
        <>
            <h2 className="title">Tic-tac-toe game</h2>
            <h2 className={gameResult ? win : resultClass}>{status}</h2>
            <div className="board-row">
                <Button value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Button value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Button value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Button value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Button value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Button value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Button value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Button value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Button value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </>
    );
};

export default Board;
