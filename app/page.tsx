import { WeatherData } from "./types/WeatherData";
import WeatherCity from "./WeatherCity";
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
    const res = await fetch(url, options).then((res) => res.json());
    return res;
  } catch {
    throw new Error("There is something wrong");
  }
};
const fetchMyApiForTownArray = async (): Promise<string[]> => {
  const url = "http://localhost:3000/api/towns";
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await fetch(url, options).then((res) => res.json());
    console.log(res);
    return res;
  } catch {
    throw new Error("There is something wrong");
  }
};

const Home = async () => {
  const towns = await fetchMyApiForTownArray();
  const createData = async (town: string) => {
    const data = await getData(town);
    return data;
  };
  const citiesData: WeatherData[] = await Promise.all(
    towns.map((item) => createData(item))
  );
  return (
    <main>
      <div className="search">
        <Suspense fallback={<Loading />}>
          <SearchBar towns={towns} />
        </Suspense>
      </div>
      <ul className="city-list">
        {citiesData.map((item) => (
          <li className="city">
            <Suspense fallback={<Loading />}>
              <WeatherCity
                key={item.location.name}
                location={item.location}
                current={item.current}
              />
            </Suspense>
          </li>
        ))}
        <footer className="list-foot"></footer>
      </ul>
    </main>
  );
};

export default Home;
