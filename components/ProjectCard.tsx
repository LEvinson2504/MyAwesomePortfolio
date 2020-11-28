import React from "react";

export default function ProjectCard({ project, right = false }) {
  const { title, desc, src } = project;

  return (
    <div className="bg-white max-w-xs py-10 mt-20 lg:my-10 flex flex-col content-between items-center">
      <h3 className="text-lg font-bold"> {title} </h3>
      <img src={src} className="my-5" />
      <h4 className="px-5 text-center"> {desc} </h4>
    </div>
  );
}
