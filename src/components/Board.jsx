/* eslint-disable react/prop-types */

import Square from "./Square";

const Board = ({ squares,onSquareClick  }) => {
  
  return (
    <div className="grid grid-cols-3 gap-x-2 gap-y-4 justify-center items-center ">
      {squares.map((value, index) => 
        <Square key={index} value={value||index} ind onSquareClick={()=>onSquareClick(index)} />
      )}
    </div>
  );
};

export default Board;
