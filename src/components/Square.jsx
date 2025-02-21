/* eslint-disable react/prop-types */


const Square = ({ value, onClick }) => {
    console.log("squar value",value)
  return (
    <button
      onClick={onClick}
      className="w-40 h-40 text-2xl font-bold border border-gray-900 flex items-center justify-center hover:bg-gray-200"
    >
      {value??""}
    </button>
  );
};

export default Square;
