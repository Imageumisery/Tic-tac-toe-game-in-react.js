const Button = ({ value, onSquareClick }) => {
    const empty = "";
    const emptySquare = "empty";
    const square = "square";
    return (
        <button className={value === null ? emptySquare : square} onClick={onSquareClick}>
            {value === null ? empty : value}
        </button>
    );
};

export default Button;
