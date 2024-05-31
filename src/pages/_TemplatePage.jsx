import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Template() {
    return (
        <>
            <div className="max-w-[1240px] p-4 px-4 justify-between items-center mx-auto">
                <Header />
                <Outlet />
                <Footer />
            </div>
        </>
    );
}
