import React from "react";
import { useState } from "react";

const button = ({ number }) => {
  return (
    <div className="flex items-center justify-center">
      <button className="bg-dark-blue hover:bg-orange-800 text-light-grey text-xl font-bold py-2 px-4 rounded-full w-12 h-12">
        {number}
      </button>
    </div>
  );
};

export default button;
