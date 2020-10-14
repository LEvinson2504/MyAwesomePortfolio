import React from "react";

export default function Footer() {
    return <section className="sm:ml-40 flex flex-row">
        <div className="flex flex-col sm:ml-20 sm:my-10">
            <h3 className="text-4xl font-light">Home</h3>
            <h3 className="text-4xl font-light">About</h3>
            <h3 className="text-4xl font-light">Projects</h3>
        </div>

        <div className="flex flex-col sm:ml-40 sm:my-10">
            <h3 className="text-4xl font-light">LinkedIn</h3>
            <h3 className="text-4xl font-light">Github</h3>
            <h3 className="text-4xl font-light">Twitter</h3>
        </div>
    </section>
}