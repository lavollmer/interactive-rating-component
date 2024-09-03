import React from "react";
import ButtonCopy from "./ButtonCopy";

const Rating = ({ number }) => {
  const handleClick = () => {
    alert("Thank you for your feedback!");
  };

  return (
    <div className="flex flex-col space-y-6">
      <div className="flex flex-row justify-evenly items-center justify-center">
        <ButtonCopy number={1} />
        <ButtonCopy number={2} />
        <ButtonCopy number={3} />
        <ButtonCopy number={4} />
        <ButtonCopy number={5} />
      </div>
      <div className="flex flex-row items-center justify-center text-center ">
        <button
          className="bg-white text-dark-blue text-xl font-overpass px-20 py-4 rounded-full hover:bg-orange-700 hover:text-white"
          onClick={handleClick}
        >
          <p className="font-bold">SUBMIT</p>
        </button>
      </div>
    </div>
  );
};

export default Rating;
