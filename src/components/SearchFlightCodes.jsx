import { useState } from "react";
import data from "../contexts/data.json";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function SearchAirportCodes({ updateFormData, datakey }) {
    const [searchInput, setSearchInput] = useState("");

    function submit(value) {
        updateFormData(datakey, value);
        setSearchInput(value);
    }

    const filteredData = data
        .filter((item) => {
            const searchTerm = searchInput.toLowerCase();
            const city =
                item.city_name.toLowerCase() +
                item.country.toLowerCase() +
                item.region_name.toLowerCase();
            return (
                searchTerm && city.includes(searchTerm) && city !== searchTerm
            );
        })
        .slice(0, 10);

    return (
        <div className="relative flex flex-col items-center rounded-lg">
            <div className="bg-transparent text-blue-500 focus:outline-none p-2 w-full flex items-center justify-between font-bold text-xs rounded-lg tracking-wider border-2 active:border-back duration-300 active:text-green">
                <input
                    placeholder={datakey.toUpperCase()}
                    type="text"
                    value={searchInput}
                    name="searchInput"
                    onChange={(e) => setSearchInput(e.target.value)}
                    style={{ width: "300px", height: "30px" }}
                />
                {searchInput && (
                    <AiOutlineCloseCircle
                        onClick={() => submit("")}
                        className="text-[30px] text-[#a5a6a6] hover:text-textColor icon"
                    />
                )}
            </div>
            {filteredData.length > 0 && (
                <div className="bg-[#00df9a] absolute top-20 flex flex-col items-start rounded-lg p-5 w-full">
                    {filteredData.map((item) => (
                        <div
                            className="text-xs flex flex-col hover:bg-blue-300 cursor-pointer border-l-transparent border-t border-gray-400 p-2"
                            key={item.iata}
                            onClick={() =>
                                submit(
                                    `${item.city_name} - ${item.country} - ${item.iata}`
                                )
                            }>
                            <div className="flex justify-between">
                                <p>
                                    {item.city_name} - {item.iata}
                                </p>
                            </div>
                            <div className="flex justify-between">
                                <p>{item.country}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
