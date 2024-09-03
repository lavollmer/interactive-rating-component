import React from "react";
import IllustrationThank from "../assets/illustration-thank-you.svg";

const Thank = ({ rating }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center space-y-6">
        <div>
          <img src={IllustrationThank} alt="illustration-thank-you" />
        </div>
        <div className="flex flex-col justify-center items-center bg-dark-blue rounded-full py-2 px-4">
          <p className="text-orange-500 text-lg">
            You selected {rating} out of 5
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-white text-4xl">Thank you!</h1>
          <p className="text-light-grey text-lg">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Thank;
