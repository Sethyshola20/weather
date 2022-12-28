"use client";

import React, { useContext } from "react";
import { useCityContext } from "../../context/CityContextProvider";

const AddButton = () => {
  const { towns } = useCityContext();
  const addCityToTownsArray = (
    e: React.MouseEvent<HTMLButtonElement>,
    towns: Array<string>
  ) => {
    towns.push(e.currentTarget.innerText);
  };
  return <button onClick={(e) => addCityToTownsArray(e, towns)}>+</button>;
};
export default AddButton;
