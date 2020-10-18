import React from "react";

export default function ProjectCard({ project, right = false }) {
    const { title, desc, src } = project;

    return <div>{right ? <div className="sm:max-w-full bg-white flex flex-row justify-around">
        <div>
            <div className="font-medium text-3xl mt-10 sm:text-5xl md:mt-20">{title}</div>
            <div className="font-light text-2xl mt-2 sm:mt-5 sm:text-4xl max-w-2xl">{desc}</div>
        </div>
        <div>
            <img src={src} className="m-10" />
        </div>
    </div> : <div className="sm:max-w-full bg-white flex flex-row justify-around">
            <div>
                <img src={src} className="my-5" />
            </div>
            <div>
                <div className="font-medium text-3xl mt-10 sm:text-5xl md:mt-20">{title}</div>
                <div className="font-light text-2xl mt-2 sm:mt-5 sm:text-4xl max-w-xl">{desc}</div>
            </div>
        </div>}
    </div>
}