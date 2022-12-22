"use client";

import React, { Suspense, useEffect } from "react";
import { useState } from "react";
import { Citysearch } from "../types/Citysearch";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  type result = Array<Citysearch>;

  const getTown = async (searchInput: string): Promise<result> => {
    const url = `https://api.api-ninjas.com/v1/city?name=${searchInput}`;
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": "tQoV7N8hnQB26DggA50YUCtUvBakKtQobG1HioYV",
      },
    };
    try {
      const res = await fetch(url, options).then((res) => res.json());
      console.log(res);
      return res;
    } catch {
      throw new Error("Could not find any city");
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Recherche"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <div className="town-list">
        <ul>
          <Suspense fallback={<div>loading...</div>}>
            <li>{searchInput}</li>
          </Suspense>
        </ul>
      </div>
    </>
  );
};
export default SearchBar;
