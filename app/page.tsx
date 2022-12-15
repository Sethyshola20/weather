import CityForm from "./component/cityForm";
import { WeatherData } from "./interface/WeatherData";

type param = {
  params: {
    city: string;
  };
};

const getData = async (city: string) => {
  const url = `https://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${city}&aqi=yes`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const res = await fetch(url, options).then((res) => res.json());
  return res.json() as WeatherData;
};

const handleclick = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const town = new FormData(e.target as HTMLFormElement);
  console.log(town);
};

const Home = async ({ params: { city } }: param) => {
  const data = getData(city);

  const [weatherData] = await Promise.all([data]);

  return (
    <main>
      <h1>See the latest weather</h1>
      <div>{weatherData.location.name}</div>
      <CityForm />
    </main>
  );
};
export default Home;
