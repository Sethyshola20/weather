"use client";

import { WeatherData } from "../interface/WeatherData";
import { useState } from "react";

const CityForm = () => {
  const [city, setCity] = useState("");

  const getData = async () => {
    const url = `https://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${city}&aqi=yes`;
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await fetch(url, options).then((res) => res.json());
    if (!res.ok) {
      throw new Error("Fetched did not work");
    } else {
      const data = res.json() as WeatherData;
      const cityName = data.location.name;
      setCity(cityName);
    }
  };
  return (
    <>
      <form onSubmit={getData}>
        <input
          type="text"
          id="city"
          placeholder="enter your city"
          name="city"
        />
        <button type="button">Submit</button>
      </form>
      <span>{city}</span>
    </>
  );
};
export default CityForm;
