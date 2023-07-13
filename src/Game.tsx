import { useState } from "react";
import Board from "./Board";

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares: []) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(move) {
        setCurrentMove(move);
    }
    return (
        <>
            <div className="game">
                <div className="board">
                    <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
                </div>
                <div className="history">
                    <ol>
                        {history.map((squares, move) => {
                            let description;
                            if (move > 0) {
                                description = "Go to move #" + move;
                            } else {
                                description = "Go to game start";
                            }
                            return (
                                <li key={move}>
                                    <button className="history-button" onClick={() => jumpTo(move)}>
                                        {description}
                                    </button>
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </div>
        </>
    );
};

export default Game;
