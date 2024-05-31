import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <header>
            <nav className="max-w-[1240px] p-4 px-4 justify-between items-center mx-auto">
                <div className="flex items-center justify-between">
                    <div className="logoDiv text-[#00df9a] text-2xl ">
                        <h1 className="logo text-[25px] text-black">
                            <strong>Razor</strong>
                            Ray
                        </h1>
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleMenu}>
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                className="w-6 h-6">
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                    <ul className="hidden md:flex space-x-4">
                        <li>
                            <NavLink to={"/"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/flights"}>Flights</NavLink>
                        </li>

                        <li>
                            <NavLink to={"/hotels"}>Hotels</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/cars"}>Cars</NavLink>
                        </li>
                    </ul>
                </div>
                {isMenuOpen ? (
                    <ul className="flex-col md:hidden">
                        <li className="py-2">
                            <NavLink to={"/"}>Home</NavLink>
                        </li>
                        <li className="py-2">
                            <NavLink to={"/flights"}>Flights</NavLink>
                        </li>
                        <li className="py-2">
                            <NavLink to={"/hotels"}>Hotels</NavLink>
                        </li>
                        <li className="py-2">
                            <NavLink to={"/cars"}>Cars</NavLink>
                        </li>
                    </ul>
                ) : null}
            </nav>
        </header>
    );
}
