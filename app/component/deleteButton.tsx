"use client";

const DeleteButton = ({ city }: { city: string }) => {
  const deleteCity = async () => {
    const url = "https://weather-time-two.vercel.app/api/towns";
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(city),
    };
    await fetch(url, options);
  };
  return (
    <button onClick={deleteCity} className="delete">
      delete this city
    </button>
  );
};
export default DeleteButton;
