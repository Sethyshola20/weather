import { ChangeEvent } from "react";

export default async function Home() {
  const fetchedData = getData("Paris");
  return (
    <main>
      <h1>See the latest weather</h1>
      <div></div>
      <form onSubmit={handleclick}>
        <input type="text" id="city" placeholder="enter your city" />
        <button type="button">Submit</button>
      </form>
    </main>
  );
}
const getData = async (city: string) => {
  const url = `https://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${city}&aqi=yes`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const res = await fetch(url, options);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  const dataArray = Object.keys(data);
  console.log(dataArray);
};

const handleclick = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const town = new FormData(e.target as HTMLFormElement);
  console.log(town);
};
