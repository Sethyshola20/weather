"use client";

import React, {
  useEffect,
  useState,
  createContext,
  useContext,
  ContextType,
} from "react";

type CityContextType = {
  towns: string[];
};

const CityContext: React.Context<CityContextType> = createContext({
  towns: [""],
});

export const CityContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [towns, setTowns] = useState<string[]>([]);

  useEffect(() => {
    const fetchMyApiForTownArray = async () => {
      const url = "/api/towns";
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      try {
        const res = await fetch(url, options).then((res) => res.json());
        setTowns(res);
      } catch {
        throw new Error("There is something wrong");
      }
    };
    fetchMyApiForTownArray();
  }, [towns]);

  return (
    <CityContext.Provider value={{ towns: towns }}>
      {children}
    </CityContext.Provider>
  );
};

export const useCityContext = () => useContext(CityContext);
