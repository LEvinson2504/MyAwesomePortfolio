import React from "react";

export default function ProjectCard({ project, right = false }) {
  const { title, desc, src } = project;

  return (
    <div>
      {right ? (
        <div className="sm:max-w-full mt-20 bg-white flex flex-col lg:flex-row justify-around">
          <div>
            <div className="font-medium text-3xl mt-5 sm:text-5xl">{title}</div>
            <div className="font-light text-2xl mt-2 sm:mt-5 sm:text-4xl max-w-2xl">
              {desc}
            </div>
          </div>
          <div>
            <img src={src} className="my-5" />
          </div>
        </div>
      ) : (
        <div className="sm:max-w-full bg-white flex flex-col lg:flex-row justify-around">
          <div>
            <img src={src} className="my-5" />
          </div>
          <div className="md:ml-5">
            <div className="font-medium text-3xl sm:text-5xl mt-5">{title}</div>
            <div className="font-light text-2xl mt-2 sm:mt-5 sm:text-4xl max-w-xl">
              {desc}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
