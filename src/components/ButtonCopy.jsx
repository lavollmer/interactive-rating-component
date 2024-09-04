import React from "react";

const ButtonCopy = ({ number, isSelected, onClick }) => {
  return (
    // based on isSelected state --> will display the button in orange if selected, dark blue if not selected
    <button
      onClick={onClick}
      className={`${
        isSelected ? "bg-orange-700 text-white" : "bg-gunmetal text-light-grey"
      } hover:bg-orange-800 text-xl font-bold py-2 px-4 rounded-full w-12 h-12 flex items-center justify-center`}
    >
      {number}
    </button>
  );
};

export default ButtonCopy;