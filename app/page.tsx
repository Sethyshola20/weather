import CityForm from "./component/cityForm";
import { WeatherData } from "./interface/WeatherData";
import WeatherCity from "./WeatherCity";

const towns = ["Montpellier", "Paris", "Lyon", "Marseille"];

const getData = async (town: string): Promise<WeatherData> => {
  const url = `https://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${town}&aqi=no`;
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

const Home = async () => {
  const createData = async (town: string) => {
    const data = await getData(town);
    return data;
  };
  const citiesData: WeatherData[] = await Promise.all(
    towns.map((item) => createData(item))
  );
  return (
    <main>
      <ul className="flex">
        {citiesData.map((item) => (
          <li>
            <WeatherCity
              key={item.location.name}
              location={item.location}
              current={item.current}
            />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
