"use client";

const DeleteButton = ({ city }: { city: string }) => {
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
    try {
      await fetch(url, options);
      window.location.reload();
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
