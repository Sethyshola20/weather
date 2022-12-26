"use client";

import React from "react";
import { towns } from "../townsArray";

const AddButton = () => {
  const addCityToTownsArray = (
    e: React.MouseEvent<HTMLButtonElement>,
    towns: Array<string>
  ) => {
    towns.push(e.currentTarget.innerText);
  };
  return <button onClick={(e) => addCityToTownsArray(e, towns)}>+</button>;
};
export default AddButton;
