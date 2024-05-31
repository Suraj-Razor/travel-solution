import data from "../contexts/data.json";

export default function AirportName({ aircode }) {
    const filteredData = data.find((item) => item.iata === aircode);
    return (<>{filteredData.city_name.split("-").reverse()[0]} {filteredData.iata} </>);
}
