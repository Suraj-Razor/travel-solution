import { useState, useContext, createContext, useEffect } from "react";
import data from "./data.json";
export const AirportDataContext = createContext();

export function useAirportCodes() {
    return useContext(AirportDataContext);
}

export function IataCode({ children }) {
    const [airportData, setAirportData] = useState("");
    useEffect(() => {
        setAirportData(data);
        // eslint-disable-next-line
    }, []);

    return (
        <AirportDataContext.Provider value={airportData}>
            {children}
        </AirportDataContext.Provider>
    );
}
