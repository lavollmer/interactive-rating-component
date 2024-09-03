import React from "react";
import { useState } from "react";

const ButtonCopy = ({ number }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={handleClick}
        className={`${
          isClicked ? "bg-orange-800" : "bg-dark-blue"
        } text-light-grey text-xl font-bold py-2 px-4 rounded-full w-12 h-12 flex items-center justify-center`}
      >
        {number}
      </button>
    </div>
  );
};

export default ButtonCopy;
