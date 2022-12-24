"use client";

import React, { Suspense } from "react";
import useSWR from "swr";
import { useState } from "react";
import { Citysearch } from "../types/Citysearch";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");

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
      return data;
    } catch {
      throw new Error("Could not fetch");
    }
  };
  const { data, error } = useSWR(searchInput, fetcher);

  if (error) {
    console.error(error);
  }

  return (
    <>
      <input
        type="text"
        placeholder="Recherche"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <Suspense fallback="could not load">
        <div className="town-list">
          <ul>
            {data &&
              data.map((item: Citysearch) => (
                <li key={item.population}>{item.name}</li>
              ))}
          </ul>
        </div>
      </Suspense>
    </>
  );
};
export default SearchBar;
