import { useState } from "react";


const Button = (value, onSquareClick) => {
  const empty = 'square empty';
  const [mark, setmark] = useState(" ");
  const [name, setName] = useState(empty);

  function handleClick(): void {
    setmark('X');
    setName('square');
  }

    return <button className={name}
    onClick={handleClick}>{mark}</button>;
};

export default Button;
