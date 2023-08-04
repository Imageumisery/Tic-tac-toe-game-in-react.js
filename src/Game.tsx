import { useState } from "react";
import Board from "./Board";

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const [isNext, setIsNext] = useState(true);
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares: string[]) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
        setIsNext(!isNext);
    }

    function jumpTo(move: number) {
        setCurrentMove(move);
    }
    return (
        <>
            <div className="game">
                <div className="board">
                    <Board xIsNext={isNext} squares={currentSquares} onPlay={handlePlay} />
                </div>
                <div className="history">
                    <ol>
                        {history.map((_, move) => {
                            let description;
                            if (move > 0) {
                                description = `Go to move #${move}`;
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
