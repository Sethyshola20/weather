import { fetchMyApiForTownArray } from "../util/fetch";
import SearchBar from "./component/SearchBar";
import WeatherCity from "./component/WeatherCity";
import { WeatherData } from "./types/WeatherData";
import "../styles/styles.css";

export default async function Home() {
  async function fetchWeatherData(town: string) {
    const weather = await getData(town);
    return weather;
  }
  async function getData(town: string): Promise<WeatherData> {
    const url = `https://api.weatherapi.com/v1/current.json?key=${process.env
      .API_KEYW!}&q=${town}&aqi=no`;
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
  }

  async function fetchData() {
    const towns = await fetchMyApiForTownArray();
    const citiesDataPromise = towns.map(async (city: string) => {
      return await fetchWeatherData(city);
    });
    const citiesData = await Promise.all(citiesDataPromise);
    return citiesData;
  }
  const citiesData = await fetchData();
  const apiKeyc = process.env.API_KEYC!;

  return (
    <main>
      <div className="search">
        <SearchBar apiKeyc={apiKeyc} />
      </div>
      <ul className="city-list">
        {citiesData.map((city) => (
          <li className="city" key={city.location.name}>
            <WeatherCity
              key={city.location.name}
              location={city.location}
              current={city.current}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
