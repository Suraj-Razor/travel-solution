import { useEffect, useState } from "react";
import { useTokenDispatch } from "../contexts/GetToken";
import AirportName from "./AirportCodes";

export default function FlightSearchResult({ formdata: { from, to, date } }) {
    let getToken = useTokenDispatch();

    const [searchResult, setSearchResult] = useState();
    // const data = from.reverse();
    useEffect(() => {
        async function search(origin, destination, date, adults = 1) {
            let token = await getToken();
            let payload = {
                currencyCode: "AUD",
                originDestinations: [
                    {
                        id: "1",
                        originLocationCode: origin,
                        destinationLocationCode: destination,
                        departureDateTimeRange: {
                            date: date
                        }
                    }
                ],
                travelers: [
                    {
                        id: adults,
                        travelerType: "ADULT",
                        fareOptions: ["STANDARD"]
                    }
                ],
                sources: ["GDS"],
                searchCriteria: {
                    maxFlightOffers: 10
                }
            };
            const response = await fetch(
                `https://test.api.amadeus.com/v2/shopping/flight-offers`,
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(payload)
                }
            );
            let responseData = await response.json();
            let result = responseData.data;
            setSearchResult(result);
        }
        let origin = from.split("-").reverse()[0].trim();
        let destination = to.split("-").reverse()[0].trim();
        search(origin, destination, date, 1);
    }, [from, to, date, getToken]);
    return (
        <div>
            {searchResult &&
                searchResult.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="mt-4 mb-4 border rounded-md bg-gray-100">
                            <div className="grid grid-cols-2 p-3">
                                <div className="text-lg font-bold text-gray-800 place-items-center ">
                                    Price: ${item.price.grandTotal}{" "}
                                    <span className="text-xs font-thin">
                                        pp
                                    </span>
                                </div>
                                <div>
                                    <div className="text-gray-700">
                                        Published By Airline:{" "}
                                        {item.validatingAirlineCodes}
                                    </div>
                                    <div className="text-gray-700">
                                        Total Flight Time:{" "}
                                        {item.itineraries[0].duration.slice(2)}
                                    </div>
                                </div>
                                {item.itineraries[0].segments?.map(
                                    (segment, index) => {
                                        const departureDate = new Date(
                                            segment.departure.at
                                        );
                                        const arrivalDate = new Date(
                                            segment.arrival.at
                                        );

                                        return (
                                            <div
                                                key={segment.id}
                                                className="border-t border-gray-200 pt-3 mt-3 col-span-3">
                                                <div className="grid grid-cols-2 mt-1">
                                                    <div>
                                                        <div>
                                                            Depart{" "}
                                                            <AirportName
                                                                aircode={
                                                                    segment
                                                                        .departure
                                                                        .iataCode
                                                                }
                                                            />
                                                            <div className="text-xs text-gray-700">
                                                                At:{" "}
                                                                {departureDate.toLocaleString()}
                                                            </div>
                                                        </div>
                                                        <div>
                                                            Arrive{" "}
                                                            <AirportName
                                                                aircode={
                                                                    segment
                                                                        .arrival
                                                                        .iataCode
                                                                }
                                                            />
                                                            <div className="text-xs text-gray-700">
                                                                At:{" "}
                                                                {arrivalDate.toLocaleString()}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="mt-1 text-gray-700">
                                                            Duration:{" "}
                                                            {segment.duration.slice(
                                                                2
                                                            )}
                                                        </div>
                                                        <div className="mt-1 text-gray-700">
                                                            Operated By:{" "}
                                                            {
                                                                segment
                                                                    .operating
                                                                    ?.carrierCode
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    }
                                )}
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}
