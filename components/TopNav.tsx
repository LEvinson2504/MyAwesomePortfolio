import React from "react";

export default function TopNav() {
    return <header className="bg-white">
        <div className="sm:flex sm:justify-end sm:flex-row text-right sm:mx-5 p-4">
            <div className="sm:p-5 text-gray-700 text-3xl sm:text-4xl">Home</div>
            <div className="sm:p-5 text-gray-700 text-3xl sm:text-4xl">About Me</div>
            <div className="sm:p-5 text-gray-700 text-3xl sm:text-4xl">Projects</div>
        </div>
    </header>
}