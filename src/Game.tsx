import Board from "./Board";

const Game = () => {
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const currentSquares = history[history.length - 1];

    function handlePlay(nextSquares) {
        setHistory([...history, nextSquares]);
        setXIsNext(!xIsNext);
    }

    function jumpTo() {
        const moves = history.map((squares, move) => {
            let description;
            if (move > 0) {
                description = "Go to move #" + move;
            } else {
                description = "Go to game start";
            }
            return (
                <li>
                    <button onClick={() => jumpTo(move)}>{description}</button>
                </li>
            );
        });
    }
    return (
        <>
            <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            <div className="history">
                {
                
                }</div>;
        </>
    );
};

export default Game;
