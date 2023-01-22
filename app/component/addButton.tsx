"use client";

import React from "react";
import { Citysearch } from "../types/Citysearch";
import { towns } from "../../pages/api/towns";
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
  {
    /*const addCityToTownsArray = async (towns: string[]) => {
    const url = process.env.NEXT_PUBLIC_API_URL!;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(searchInput),
    };

    const res = await fetch(url, options);
    const data = await res.json();
    removeListOfCities();
    setHasBeenCalled(false);
  };*/
  }
  return (
    <>
      <button
        className="add-to-citylist"
        onClick={() => towns.push(searchInput)}
      >
        Add
      </button>
    </>
  );
};
export default AddButton;
