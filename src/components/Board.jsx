/* eslint-disable react/prop-types */

import Square from "./Square";

const Board = ({ square, onClick }) => {
  
  return (
    <div className="grid grid-cols-3 gap-2 border border-red-400">
      {square.map((value, index) => 
        <Square key={index} value={value} onClick={() => onClick(index)} />
      )}
    </div>
  );
};

export default Board;
