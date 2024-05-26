import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <div id="headerBranding">RazorRay Logo</div>
            <nav>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/flights"}>Flights</NavLink>
                <NavLink to={"/hotels"}>Hotels</NavLink>
                <NavLink to={"/cars"}>Cars</NavLink>
            </nav>
        </header>
    );
}
