import { WeatherData } from "./types/WeatherData";
import WeatherCity from "./component/WeatherCity";
import "../styles/styles.css";
import SearchBar from "./component/SearchBar";
import { Suspense } from "react";
import Loading from "./loading";

const getData = async (town: string): Promise<WeatherData> => {
  const url = `https://api.weatherapi.com/v1/current.json?key=${process.env.API_KEYW}&q=${town}&aqi=no`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await fetch(url, options);
    const data = await res.json();
    return data as WeatherData;
  } catch {
    throw new Error("There is something wrong");
  }
};
const fetchMyApiForTownArray = async (): Promise<string[]> => {
  //const url = "http://localhost:3000/api/towns";
  const url = "https://weather-time-two.vercel.app/api/towns";
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await fetch(url, options);
    const data = await res.json();
    return data as string[];
  } catch {
    throw new Error("There is something wrong with the request to your api");
  }
};

const Home = async () => {
  const apiKeyc = process.env.API_KEYC!;
  const towns = await fetchMyApiForTownArray();
  const createCityList = async (town: string) => {
    const data = await getData(town);
    return data;
  };
  const citiesData: WeatherData[] = await Promise.all(
    towns.map((town) => createCityList(town))
  );
  return (
    <main>
      <div className="search">
        <Suspense fallback={<Loading />}>
          <SearchBar towns={towns} apiKeyc={apiKeyc} />
        </Suspense>
      </div>
      <ul className="city-list">
        {citiesData.map((city) => (
          <Suspense fallback={<Loading />}>
            <li className="city" key={city.location.name}>
              <WeatherCity location={city.location} current={city.current} />
            </li>
          </Suspense>
        ))}
        <footer className="list-foot"></footer>
      </ul>
    </main>
  );
};

export default Home;
