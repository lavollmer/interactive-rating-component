import React from "react";

const ButtonCopy = ({ number, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-dark-blue hover:bg-orange-800 text-light-grey text-xl font-bold py-2 px-4 rounded-full w-12 h-12 flex items-center justify-center"
    >
      {number}
    </button>
  );
};

export default ButtonCopy;