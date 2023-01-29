"use client";

import React from "react";
import { Citysearch } from "../types/Citysearch";
interface Props {
  data: Citysearch[];
  searchInput: string;
  setHasBeenCalled: React.Dispatch<React.SetStateAction<boolean>>;
  towns: string[];
  removeListOfCities: () => void;
}

const AddButton: React.FC<Props> = ({
  searchInput,
  setHasBeenCalled,
  towns,
  removeListOfCities,
}) => {
  const addCityToTownsArray = async () => {
    const url = "https://weather-time-two.vercel.app/api/towns";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(searchInput),
    };

    await fetch(url, options);
    removeListOfCities();
    setHasBeenCalled(false);
  };
  return (
    <>
      <button className="add-to-citylist" onClick={() => addCityToTownsArray()}>
        Add
      </button>
    </>
  );
};
export default AddButton;
