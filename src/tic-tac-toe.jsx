import { useEffect, useState } from "react";
import Board from "./components/Board";

const array = new Array(9).fill(null);

const getWinner = (squares) => {
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

  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; 
    }
  }

  return squares.includes(null) ? null : "Draw"; 
};

export const TicTacToe = () => {
  const [squares, setSquares] = useState(array);
  const [isX, setX] = useState(true);

  const winner = getWinner(squares);

  const handleSquareClick = (index) => {
    if (squares[index] || winner) {
      return;
    }
    const updatedSquares = [...squares];
    updatedSquares[index] = isX ? "x" : "o";
    setSquares(updatedSquares);
    setX((prev) => !prev); 
  };

  const getEmptyIndex = () => {
    let result = [];
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] === null) {
        result.push(i);
      }
    }
    return result;
  };

  const generateRandomNumber = (max = 8, min = 0) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const makeNextMove = () => {
    const emptyIndex = getEmptyIndex();
    let number = generateRandomNumber();
    while (!emptyIndex.includes(number)) {
      number = generateRandomNumber(); 
    }
    return number;
  };

  useEffect(() => {
    if (!isX && winner === null) { 
      const index = makeNextMove();
      handleSquareClick(index);
    }
  }, [isX, winner]);

  return (
    <div className="flex flex-col justify-center h-screen max-w-2xl mx-auto">
      <h1>TicTacToe</h1>
      <Board squares={squares} onSquareClick={handleSquareClick} />

      {winner && <p>{winner==="Draw" ? winner :`Winner : ${winner} `}</p>} 


    </div>
  );
};

export default TicTacToe;
