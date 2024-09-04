import React from "react";

const ButtonCopy = ({ number,isSelected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        isSelected ? "bg-orange-700 text-white" : "bg-dark-blue text-light-grey"
      } hover:bg-orange-800 text-xl font-bold py-2 px-4 rounded-full w-12 h-12 flex items-center justify-center`}
    >
      {number}
    </button>
  );
};

export default ButtonCopy;