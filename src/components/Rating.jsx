import React, { useState } from "react";
import ButtonCopy from "./ButtonCopy";
import Thank from "./Thank";
import IconStar from "../assets/icon-star.svg";

const Rating = ({ number }) => {
  const [rating, setRating] = useState(number); // rating state that updates the rating based on the number selected by the end user
  const [isSubmitted, setIsSubmitted] = useState(false); // isSubmitted state updates when the user clicks the submit button

  const handleRatingClick = (number) => {
    setRating(number);
  };

  // handleSubmit is triggered by an event, prevents default page loading, and ensures that a number rating is selected before displaying the Thank You component
  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === null) {
      alert("Please select a rating!");
    } else {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="flex flex-col space-y-6 bg-raisin-black h-80 w-95">
      {isSubmitted ? (
        <Thank rating={rating} className="bg-raisin-black" />
      ) : (
        <>
          <div className="flex flex-col bg-gunmetal text-xl font-bold py-2 px-2 rounded-full h-8 w-8">
            <img
              src={IconStar}
              alt="icon-star"
              className="flex flex-col items-center justify-center h-4 w-4"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <h1 className="text-white text-2xl">How did we do?</h1>
            <p className="text-light-grey text-lg">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!{" "}
            </p>
          </div>
          <div className="flex flex-row justify-between items-center justify-center w-full">
            {/* mapping over an array of numbers - each number returns the button copy component */}
            {[1, 2, 3, 4, 5].map((number) => (
              // ButtonCopy includes props --> the key prop to identify each unique element, the number prop to display the numberm the isSelected checks the current number is equal to the rating state, the onClick prop calls the handleRatingClick with the current number
              <ButtonCopy
                key={number}
                number={number}
                isSelected={rating === number}
                onClick={() => handleRatingClick(number)}
              />
            ))}
          </div>
          <div className="flex flex-row items-center justify-center text-center ">
            {/* handleSubmit function to submit the rating and update the state to display the Thank You component */}
            <button
              onClick={handleSubmit}
              className="text-xl font-overpass px-36 py-2 rounded-full bg-orange-700 text-white font-bold"
            >
              SUBMIT
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Rating;
