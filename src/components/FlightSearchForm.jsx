import { useState } from "react";

import SearchAirportCodes from "./SearchFlightCodes";
import FlightSearchResult from "./FlightSearchResult";

import { FaPlaneDeparture } from "react-icons/fa";
import { FaPlaneArrival } from "react-icons/fa";

export default function Form() {
    const [formdata, setFromData] = useState({
        from: "",
        to: "",
        date: ""
    });

    const [search, setSearch] = useState(false);

    function updateFormData(key, value) {
        setFromData({ ...formdata, [key]: value });
    }

    return (
        <>
            <div className="searchDiv flex grid bg-greyIsh rounded-[10px] p-[3rem]">
                <div className="firstDiv flex justify-between items-center rounded-[8px] bg-white p-5 shadow-lg shadow-greyIsh-700 w-full">
                    <div className="flex flex-wrap justify-around gap-4 w-full">
                        {" "}
                        {/* Adjusted */}
                        <div className="flex gap-2 items-center">
                            <FaPlaneDeparture className="text-[25px] icon" />
                            <SearchAirportCodes
                                updateFormData={updateFormData}
                                datakey="from"
                            />
                        </div>
                        <div className="flex gap-2 items-center ">
                            <FaPlaneArrival className="text-[25px] icon" />
                            <SearchAirportCodes
                                updateFormData={updateFormData}
                                datakey="to"
                            />
                        </div>
                        <div className="flex gap-2 items-center">
                            {" "}
                            {/* Adjusted */}
                            <input
                                className="text-[15px] icon flex-grow"
                                type="date"
                                name="date"
                                value={formdata.date}
                                onChange={(e) =>
                                    updateFormData(
                                        e.target.name,
                                        e.target.value
                                    )
                                }
                            />
                        </div>
                        <button
                            className="bg-[#00df9a] w-[100px] rounded-md font-medium my-6 py-3 text-black"
                            onClick={() => setSearch(!search)}>
                            Search
                        </button>
                    </div>
                </div>
            </div>

            {search && <FlightSearchResult formdata={formdata} />}
        </>
    );
}
