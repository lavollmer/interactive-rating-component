import React, { useState } from "react";
import ButtonCopy from "./ButtonCopy";
import Thank from "./Thank";
import IconStar from "../assets/icon-star.svg";

const Rating = ({ number }) => {
  const [rating, setRating] = useState(number);
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track submission

  const handleRatingClick = (number) => {
    setRating(number);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === null) {
      alert("Please select a rating!");
    } else {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="flex flex-col space-y-6 bg-very-dark-blue h-80 w-95">
      {isSubmitted ? (
        <Thank rating={rating} className="bg-very-dark-blue" />
      ) : (
        <>
          <div className="flex flex-col bg-dark-blue text-xl font-bold py-2 px-2 rounded-full h-8 w-8">
            <img
              src={IconStar}
              alt="icon-star"
              className="flex flex-col items-center justify-center h-4 w-4"
            />
          </div>
          <div>
            <h1 className="text-white text-4xl">How did we do?</h1>
            <p className="text-light-grey text-lg">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!{" "}
            </p>
          </div>
          <div className="flex flex-row justify-evenly items-center justify-center">
            {[1, 2, 3, 4, 5].map((number) => (
              <ButtonCopy
                key={number}
                number={number}
                isSelected={rating === number}
                onClick={() => handleRatingClick(number)}
              />
            ))}
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
