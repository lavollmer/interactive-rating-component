import React, { useState } from "react";
import ButtonCopy from "./ButtonCopy";
import Thank from "./Thank";

const Rating = ({ number }) => {
  const [rating, setRating] = useState(number);
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track submission

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === "") {
      alert("Please select a rating!");
    } else {
      setIsSubmitted(true); 
    }
  };
  
  return (
    <div className="flex flex-col space-y-6">
      {isSubmitted ? (
        <Thank rating={rating} /> 
      ) : (
        <>
          <div className="flex flex-row justify-evenly items-center justify-center">
            <ButtonCopy number={1} />
            <ButtonCopy number={2} />
            <ButtonCopy number={3} />
            <ButtonCopy number={4} />
            <ButtonCopy number={5} />
          </div>
          <div className="flex flex-row items-center justify-center text-center ">
            <button
              onClick={handleSubmit} 
              className="bg-white text-dark-blue text-xl font-overpass px-20 py-4 rounded-full hover:bg-orange-700 hover:text-white"
            >
              <p className="font-bold">SUBMIT</p>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Rating;
