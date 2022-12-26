import { createContext, useContext } from "react";

const getCityArrayFromApi = async (): Promise<Array<string>> => {
    const url = "/api/towns";
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
const towns = await getCityArrayFromApi()

export const CityContext = createContext({ towns })
export const useCityContext = () => useContext(CityContext)