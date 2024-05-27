import { useState } from "react";

export default function HomePage() {
    const [originLocationCode, setOriginLocationCode] = useState("");
    const [destinationLocationCode, setDestinationLocationCode] = useState("");
    const [date, setDate] = useState("");

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
            <button>Search for Flights</button>
        </>
    );
}
