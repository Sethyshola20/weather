"use client";

import React, { useState, ReactNode } from "react";
import { CityContext } from "./CityContext";

const CityContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [towns] = useState<string[]>([]);

  return (
    <CityContext.Provider value={{ towns }}>{children}</CityContext.Provider>
  );
};

export default CityContextProvider;
