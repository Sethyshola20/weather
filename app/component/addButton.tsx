"use client";

import React from "react";

const AddButton = ({ towns }: { towns: string[] }) => {
  const addCityToTownsArray = (
    e: React.MouseEvent<HTMLButtonElement>,
    towns: Array<string>
  ) => {
    towns.push(e.currentTarget.innerText);
  };
  return <button onClick={(e) => addCityToTownsArray(e, towns)}>+</button>;
};
export default AddButton;
