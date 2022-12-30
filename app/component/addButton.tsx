"use client";

import React from "react";

const AddButton = ({
  towns,
  setHasBeenCalled,
  searchInput,
}: {
  towns: string[];
  setHasBeenCalled: React.Dispatch<React.SetStateAction<boolean>>;
  searchInput: string;
}) => {
  const addCityToTownsArray = async (towns: string[]) => {
    const url = "http://localhost:3000/api/towns";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ searchInput }),
    };

    const res = await fetch(url, options);
    const data = await res.json();
    towns.push(data);
    setHasBeenCalled(false);
  };
  return (
    <>
      <button
        className="add-to-citylist"
        onClick={() => addCityToTownsArray(towns)}
      >
        Add
      </button>
    </>
  );
};
export default AddButton;
