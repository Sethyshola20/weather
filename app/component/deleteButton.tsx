"use client";

import { useRouter } from "next/navigation";

const DeleteButton = ({ city }: { city: string }) => {
  const router = useRouter();
  const deleteCity = async () => {
    //const url = "http://localhost:3000/api/towns";
    const url = "https://weather-time-two.vercel.app/api/towns";
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(city),
    };
    await fetch(url, options);
    router.refresh();
  };
  return (
    <button onClick={deleteCity} className="delete">
      <img src="/weather/assets/bin.png" alt="delete this city" />
    </button>
  );
};
export default DeleteButton;
