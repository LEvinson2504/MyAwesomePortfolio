import React from "react";
import Footer from "./Footer";
import WorkingOn from "./WorkingOn";

export default function SubIntro() {
  const currentProjects = [
    {
      id: 1,
      project: "Working on this landing page for myself",
      date: "24th Oct",
    },
  ];
  return (
    <section className="container max-w-screen min-h-screen">
      <div className="bg-blue-100 ml-10 sm:ml-40">
        <h3 className="text-4xl pt-10 px-5 sm:text-6xl sm:ml-40">
          What am I upto
        </h3>
        {currentProjects.map(({ project, date }) => (
          <WorkingOn project={project} date={date} />
        ))}
      </div>
      <Footer />
    </section>
  );
}
