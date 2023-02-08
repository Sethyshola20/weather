"use client";

import React from "react";
import { Citysearch } from "../types/Citysearch";
import { useRouter } from "next/navigation";

interface Props {
  data: Citysearch[];
  searchInput: string;
  setHasBeenCalled: React.Dispatch<React.SetStateAction<boolean>>;
  removeListOfCities: () => void;
}

const AddButton: React.FC<Props> = ({
  searchInput,
  setHasBeenCalled,
  removeListOfCities,
}) => {
  const router = useRouter();
  const addCityToTownsArray = async () => {
    //const url = "http://localhost:3000/api/towns";
    const url = "https://weather-time-two.vercel.app/api/towns";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(searchInput),
    };

    try {
      await fetch(url, options);
      router.refresh();
      removeListOfCities();
      setHasBeenCalled(false);
    } catch {
      throw new Error();
    }
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
