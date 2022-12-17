import CityForm from "./component/cityForm";
import { WeatherData } from "./interface/WeatherData";
import { Suspense } from "react";
import Loading from "./loading";
import WeatherCity from "./WeatherCity";

const towns = ["Montpellier", "Paris", "Lyon", "Marseille"];

const getData = async (town: string): Promise<WeatherData> => {
  const url = `https://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&${town}&aqi=no`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await fetch(url, options);
    const data = res.json();
    return data;
  } catch {
    throw new Error("There is something wrong");
  }
};
const createWeatherCity = async (town: string) => {
  const data = await getData(town);
  return {
    location: data.location,
    current: data.current,
  };
};
const citiesData = towns.map(async (item) => await createWeatherCity(item));

const Home = () => {
  return (
    <main>
      {citiesData.map((item) => (
        <WeatherCity city={item} />
      ))}
    </main>
  );
};

export default Home;
