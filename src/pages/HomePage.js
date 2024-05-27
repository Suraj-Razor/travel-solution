import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const [formdata, setFromData] = useState({
        originLocationCode: "",
        destinationLocationCode: "",
        date: ""
    });

    function updateFormData(key, value) {
        setFromData({ ...formdata, [key]: value });
    }

    const navigate = useNavigate();
    return (
        <>
            <label>
                originLocationCode
                <input
                    type="text"
                    value={formdata.originLocationCode}
                    name="originLocationCode"
                    onChange={(e) =>
                        updateFormData(e.target.name, e.target.value)
                    }
                />
            </label>
            <label>
                destinationLocationCode
                <input
                    type="text"
                    value={formdata.destinationLocationCode}
                    name="destinationLocationCode"
                    onChange={(e) =>
                        updateFormData(e.target.name, e.target.value)
                    }
                />
            </label>
            <label>
                Date
                <input
                    type="date"
                    value={formdata.date}
                    name="date"
                    onChange={(e) =>
                        updateFormData(e.target.name, e.target.value)
                    }
                />
            </label>
            <button
                onClick={() => {
                    navigate("/flights");
                }}>
                Search for Flights
            </button>
        </>
    );
}
