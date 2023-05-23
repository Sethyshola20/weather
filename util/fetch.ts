export const fetchMyApiForTownArray = async (): Promise<string[]> => {
    // const url = "http://localhost:3000/api/towns";
    const url = "https://weather-time-two.vercel.app/api/towns";
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-cache",
            Pragma: "no-cache",
            Expires: "-1",
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
