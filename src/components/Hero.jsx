import React from "react";
import { ReactTyped } from "react-typed";

export default function Hero() {
    return (
        <div className="">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-[#00df9a] font-bold p-2">SEAMLESS TRAVEL</p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
                    Unbeatable Prices
                </h1>
                <div className="flex justify-center items-center">
                    <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
                        Fly with us for
                    </p>
                    <ReactTyped
                        className="md:text-5xl sm:text-4xl text-xl font-bold ms:pl-4 pl-2"
                        strings={["Comfort!", " Deals!", "Adventure!"]}
                        typeSpeed={120}
                        backSpeed={140}
                        loop
                    />
                </div>
                <p className="md:text-2xl text-xl font-bold text-gray-500">
                    "Your Gateway to the World – Book with Confidence!"
                </p>
                <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
                    Lets Fly
                </button>
            </div>
        </div>
    );
}
