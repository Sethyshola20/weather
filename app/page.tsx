import { WeatherData } from "./types/WeatherData";
import WeatherCity from "./component/WeatherCity";
import "../styles/styles.css";
import SearchBar from "./component/SearchBar";
import { Suspense } from "react";
import Loading from "./loading";
import { fetchMyApiForTownArray, getData } from "../util/fetchDataOnPageLoad";

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
          <li className="city" key={city.location.name}>
            <Suspense fallback={<Loading />}>
              <WeatherCity
                key={city.location.name}
                location={city.location}
                current={city.current}
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
