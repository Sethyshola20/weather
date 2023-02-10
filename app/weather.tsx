"use client";

import { useEffect, useState } from "react";
import { WeatherData } from "./types/WeatherData";
import WeatherCity from "./component/WeatherCity";
import "../styles/styles.css";
import SearchBar from "./component/SearchBar";
import { Suspense } from "react";
import Loading from "./loading";
import { fetchMyApiForTownArray } from "../util/fetch";

const Weather = ({
  apiKeyc,
  apiKeyw,
}: {
  apiKeyc: string;
  apiKeyw: string;
}) => {
  const [citiesData, setCitiesData] = useState<WeatherData[]>([]);

  const getData = async (town: string): Promise<WeatherData> => {
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKeyw}&q=${town}&aqi=no`;
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        cache: "no-store",
      },
    };
    try {
      const res = await fetch(url, options);
      const data: WeatherData = await res.json();
      return data;
    } catch {
      throw new Error("There is something wrong");
    }
  };

  const fetchWeatherData = async (town: string) => {
    const weather = await getData(town);
    return weather;
  };

  useEffect(() => {
    const fetchData = async () => {
      const towns = await fetchMyApiForTownArray();
      const citiesDataPromise = towns.map(async (city: string) => {
        return await fetchWeatherData(city);
      });
      const citiesData = await Promise.all(citiesDataPromise);
      setCitiesData(citiesData);
    };

    try {
      fetchData();
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <main>
      <div className="search">
        <Suspense fallback={<Loading />}>
          <SearchBar apiKeyc={apiKeyc} />
        </Suspense>
      </div>
      <ul className="city-list">
        {citiesData.map((city) => (
          <Suspense fallback={<Loading />}>
            <li className="city" key={city.location.name}>
              <WeatherCity
                key={city.location.name}
                location={city.location}
                current={city.current}
              />
            </li>
          </Suspense>
        ))}
      </ul>
    </main>
  );
};

export default Weather;
