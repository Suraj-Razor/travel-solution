import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "react-use";

export const GlobalStorageDataContext = createContext("");
export const GlobalStorageDispatchContext = createContext("");

export function useLocalStorageData() {
    return useContext(GlobalStorageDataContext);
}

export function useLocalStorageDisptach() {
    return useContext(GlobalStorageDispatchContext);
}
export function LocalStorage({ children }) {
    let [searchData, setSearchData] = useLocalStorage("search-data", "");
    let [lastSearch, setLastSearch] = useState("abc");

    useEffect(() => {
        setLastSearch(searchData);
        // eslint-disable-next-line
    }, []);

    function updateSearch(city) {
        setLastSearch(city);
        setSearchData(city);
    }
    return (
        <GlobalStorageDataContext.Provider value={lastSearch}>
            <GlobalStorageDispatchContext.Provider value={updateSearch}>
                {children}
            </GlobalStorageDispatchContext.Provider>
        </GlobalStorageDataContext.Provider>
    );
}
