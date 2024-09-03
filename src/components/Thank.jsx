import React from "react";
import IllustrationThank from "../assets/illustration-thank-you.svg";

const Thank = () => {
  return (
    <div>
      <div>
        <div>
          <img src={IllustrationThank} alt="illustration-thank-you" />
        </div>
        <div>
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
