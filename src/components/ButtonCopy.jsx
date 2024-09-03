import React from "react";
import { useState } from "react";

const ButtonCopy = ({ number }) => {
  return (
    <div className="flex items-center justify-center">
      <button className="flex flex-row items-center justify-center bg-dark-blue hover:bg-white text-light-grey hover:text-very-dark-blue text-xl font-bold py-2 px-4 rounded-full w-12 h-12">
        {number}
      </button>
    </div>
  );
};

export default ButtonCopy;
