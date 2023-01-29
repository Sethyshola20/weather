import { WeatherData } from "../app/types/WeatherData";

export const getData = async (town: string): Promise<WeatherData> => {
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
export const fetchMyApiForTownArray = async (): Promise<string[]> => {
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