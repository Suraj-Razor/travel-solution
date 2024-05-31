import { Route, Routes } from "react-router-dom";

import FlightSearchPage from "./pages/FlightSearchPage.jsx";
import Template from "./pages/_TemplatePage.jsx";
import HomePage from "./pages/HomePage.jsx";
import ComingSoonPage from "./pages/CommingSoon.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Template />}>
                <Route index element={<HomePage />} />
                <Route path="flights" element={<FlightSearchPage />} />
                <Route path="hotels" element={<ComingSoonPage />} />
                <Route path="cars" element={<ComingSoonPage />} />
            </Route>
        </Routes>
    );
}

export default App;
