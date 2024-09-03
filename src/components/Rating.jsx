import React from "react";
import Button from "./Button";

const Rating = ({ number }) => {
  
  return (
    <div className="flex flex-row justify-evenly items-center justify-center">
      <Button number={1} />
      <Button number={2} />
      <Button number={3} />
      <Button number={4} />
      <Button number={5} />
    </div>
  );
};

export default Rating;
