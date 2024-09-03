import React from "react";
import IllustrationThank from "../assets/illustration-thank-you.svg";

const Thank = ({ rating }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-very-dark-blue h-80 w-95">
      <div className="flex flex-col justify-center items-center space-y-6">
        <div>
          <img src={IllustrationThank} alt="illustration-thank-you" />
        </div>
        <div className="flex flex-col justify-center items-center bg-very-dark-blue rounded-full py-2 px-4">
          <p className="text-orange-500 text-lg">
            You selected {rating} out of 5
          </p>
        </div>
        <div className="flex flex-col justify-center items-center space-y-4">
          <h1 className="text-white text-3xl">Thank you!</h1>
          <p className="text-light-grey text-md text-center">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Thank;
