import React from "react";

export default function Intro() {
    return <div className="container sm:min-h-screen sm:w-screen h-64">
        <div className="bg-blue-100 -mt-20 ml-10 sm:min-h-screen h-screen sm:ml-40 sm:-mt-20">
            <div className="sm:absolute bottom-0 -ml-10 mt-20">
                <h1 className="text-4xl sm:text-6xl font-light">Levinson D'souza</h1>
                <img className="sm:h-500 h-10" src="/images/image.jpg"></img>
            </div>
            <div className="sm:absolute sm:bottom-0 right-0 sm:-mb-20 sm:mr-10 sm:w-64 sm:mt-20 mt-10">
                <p className="text-2xl sm:text-4xl sm:w-600 sm:mb-40 -ml-5 font-light">
                    I’m  a web developer based in Mumbai who likes to work and keep up with the latest trends in web development.
                </p>
            </div>
        </div>
    </div>
}