import React from "react";
import Button from "./Button";

const Rating = ({ number }) => {
  return (
    <div>
      <div className="flex flex-row justify-evenly items-center justify-center">
        <Button number={1} />
        <Button number={2} />
        <Button number={3} />
        <Button number={4} />
        <Button number={5} />
      </div>
      <div className="flex flex-row items-center justify-center text-center ">
        <button className="bg-white text-dark-blue text-xl font-overpass px-20 py-4 rounded-full">
          <p className="font-bold">SUBMIT</p>
        </button>
      </div>
    </div>
  );
};

export default Rating;
