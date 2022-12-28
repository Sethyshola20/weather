"use client";

import React, { Suspense, useContext } from "react";
import useSWR from "swr";
import { useState } from "react";
import { Citysearch } from "../types/Citysearch";
import AddButton from "./addButton";
import { useCityContext } from "../../context/CityContextProvider";
import searchicon from "../../assets/searchicon.png";
import Image from "next/image";
import Loading from "../loading";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [hasBeenCalled, setHasBeenCalled] = useState(false);
  const { towns } = useCityContext();

  const fetcher = async (key: string) => {
    const url = `https://api.api-ninjas.com/v1/city?name=${key}`;
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": "tQoV7N8hnQB26DggA50YUCtUvBakKtQobG1HioYV",
      },
    };

    try {
      const res = await fetch(url, options);
      const data = await res.json();
      console.log(data);
      return data;
    } catch {
      throw new Error("Could not fetch");
    }
  };
  const { data, error } = useSWR(searchInput, fetcher);

  if (error) {
    console.error(error);
  }
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
      <header id="recherche">
        <div className="search-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
          </svg>
          <input
            id="search"
            className="searchbar"
            type="text"
            placeholder="Recherche"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onClick={() => displayListOfCities()}
          />
          {hasBeenCalled ? (
            <button onClick={() => removeListOfCities()}>Cancel</button>
          ) : (
            ""
          )}
        </div>
      </header>

      <Suspense fallback={<Loading />}>
        <div id="town-list-container">
          <ul className="town-list">
            {data &&
              data.map((item: Citysearch) => (
                <li className="town-list-item" key={item.population}>
                  {item.name}
                </li>
              ))}
          </ul>
        </div>
      </Suspense>
    </>
  );
};
export default SearchBar;
