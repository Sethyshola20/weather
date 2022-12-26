"use client";

import React, { useContext } from "react";
import { CityContext } from "../../context/CityContext";

const AddButton = () => {
  const { towns } = useContext(CityContext);
  const addCityToTownsArray = (
    e: React.MouseEvent<HTMLButtonElement>,
    towns: Array<string>
  ) => {
    towns.push(e.currentTarget.innerText);
  };
  return <button onClick={(e) => addCityToTownsArray(e, towns)}>+</button>;
};
export default AddButton;
