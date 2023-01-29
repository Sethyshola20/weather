"use client";

import React, { Suspense } from "react";
import useSWR from "swr";
import { useState } from "react";
import Loading from "../loading";
import TownList from "./TownList";
import { Citysearch } from "../types/Citysearch";

const SearchBar = ({
  towns,
  apiKeyc,
}: {
  towns: string[];
  apiKeyc: string;
}) => {
  const [searchInput, setSearchInput] = useState("");
  const [hasBeenCalled, setHasBeenCalled] = useState(false);

  const fetcher = async (key: string): Promise<Citysearch[]> => {
    const url = `https://api.api-ninjas.com/v1/city?name=${key}`;
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": apiKeyc,
      },
    };
    try {
      const res = await fetch(url, options);
      const data = await res.json();
      return data as Citysearch[];
    } catch {
      throw new Error("Could not fetch");
    }
  };
  const { data } = useSWR(searchInput, fetcher);

  const displayListOfCities = () => {
    const townList = document.getElementById("town-list-container");
    const header = document.getElementById("recherche");
    townList?.classList.add("town-list-container");
    header?.classList.add("recherche");
    setHasBeenCalled(true);
  };
  const removeListOfCities = () => {
    const townList = document.getElementById("town-list-container");
    const header = document.getElementById("recherche");
    townList?.classList.remove("town-list-container");
    header?.classList.remove("recherche");
    setHasBeenCalled(false);
  };
  return (
    <>
      <Suspense fallback={<Loading />}>
        <header id="recherche">
          <form className="search-wrapper">
            <input
              id="search"
              type="search"
              className="searchbar"
              placeholder="Recherche"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onClick={() => displayListOfCities()}
            />
            {hasBeenCalled ? (
              <button
                className="cancel"
                type="reset"
                onClick={() => removeListOfCities()}
              >
                Cancel
              </button>
            ) : (
              ""
            )}
          </form>
        </header>
      </Suspense>
      <Suspense fallback={<Loading />}>
        <TownList
          data={data!}
          setHasBeenCalled={setHasBeenCalled}
          towns={towns}
          removeListOfCities={removeListOfCities}
        />
      </Suspense>
    </>
  );
};
export default SearchBar;
