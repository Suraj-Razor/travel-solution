import { Route, Routes } from "react-router-dom";

import FlightSearchPage from "./pages/FlightSearchPage.jsx";
import Template from "./pages/_TemplatePage.jsx";
import HomePage from "./pages/HomePage.js";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Template />}>
                <Route index element={<HomePage />} />
                <Route path="flights" element={<FlightSearchPage />} />
            </Route>
        </Routes>
    );
}

export default App;
