import  { useState } from "react";
import Board from "./components/Board";


const allSquares = Array(9).fill(null);


const calculateWinner = (square)=>{
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    for (let [a,b,c] of lines){
        if(square[a]&&square[a] === square[b]&&square[a] === square[c]){
            return square[a]
        }

    }
    return square.includes(null) ? null : "Draw"
}

const TicTakToe = () => {
    const [square,setSquares] = useState(allSquares);
    const [isXNext,setIsXNext] = useState(true);

    const winner = calculateWinner(square)

    const handleClick = (index)=>{
        if(square[index]||winner){
            return;
        }

        const nextSquare = square.slice();
        nextSquare[index] = isXNext ? "X" :"O"
        setSquares(nextSquare);
        setIsXNext(!isXNext);
    }


    const resetGame=()=>{
        setIsXNext(true);
        setSquares(allSquares)
    }
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Tic Tac Toe</h1>


      <Board square={square} onClick={handleClick} />
      <p className="my-4 text-xl">
        {winner ? `Winner: ${winner}` : `Next Player: ${isXNext ? 'X' : 'O'}`}
      </p>
      <button
        onClick={resetGame}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Reset Game
      </button>
    </div>
  );
};

export default TicTakToe;
