"use client";

import React from "react";

const AddButton = ({ towns, setHasBeenCalled }: any) => {
  const addCityToTownsArray = (
    e: React.MouseEvent<HTMLButtonElement>,
    towns: Array<string>
  ) => {
    const url = "http://localhost:3000/api/towns";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    };

    towns.push(e.currentTarget.innerText);
    setHasBeenCalled(false);
  };
  return (
    <button
      className="add-to-citylist"
      onClick={(e) => addCityToTownsArray(e, towns)}
    >
      +
    </button>
  );
};
export default AddButton;
