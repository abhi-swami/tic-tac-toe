/* eslint-disable react/prop-types */


const Square = ({ value, onSquareClick }) => {

    const textValue  = value === "x" ? "text-green-500" :  value === "o" ? "text-red-500" :"text-black"
  return (
    <button
      onClick={onSquareClick}
      className={`w-[100%] h-40 text-2xl font-bold border border-gray-900 flex items-center justify-center hover:bg-gray-200 ${textValue} text-6xl rounded-lg`}
    >
      {value??""}
    </button>
  );
};

export default Square;
