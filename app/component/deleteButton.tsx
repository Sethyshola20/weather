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
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
        Expires: "-1",
      },
      body: JSON.stringify(city),
    };
    try {
      await fetch(url, options);
      router.refresh();
      console.log("refresh");
    } catch {
      throw new Error();
    }
  };
  return (
    <button onClick={deleteCity} className="delete">
      Delete this city
    </button>
  );
};
export default DeleteButton;
