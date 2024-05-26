import { useState } from "react";

export default function HomePage() {
    const [originLocationCode, setOriginLocationCode] = useState("");
    const [destinationLocationCode, setDestinationLocationCode] = useState("");
    const [date, setDate] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    async function search(origin, destination, date, adults = 1) {
        const response = await fetch(
            `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${origin}&destinationLocationCode=${destination}&departureDate=${date}&adults=${adults}`,
            {
                method: "GET",
                headers: {
                    Authorization: "Bearer vpsYRvDCKMUpRhs6Hx6gycrDUd90"
                }
            }
        );
        let responseData = await response.json();
        let result = responseData.data;
        setSearchResult(result);
    }

    return (
        <>
            <label>
                originLocationCode
                <input
                    type="text"
                    value={originLocationCode}
                    onChange={(e) => setOriginLocationCode(e.target.value)}
                />
            </label>
            <label>
                destinationLocationCode
                <input
                    type="text"
                    value={destinationLocationCode}
                    onChange={(e) => setDestinationLocationCode(e.target.value)}
                />
            </label>
            <label>
                Date
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </label>
            <button
                onClick={() =>
                    search(originLocationCode, destinationLocationCode, date, 1)
                }>
                Search for Flights
            </button>
            {searchResult &&
                searchResult.map((data) => {
                    return <p key={data.id}>{JSON.stringify(data)}</p>;
                })}
        </>
    );
}
