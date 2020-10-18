import React from "react";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "eMenu - contactless menus",
      desc:
        "My final year project which doesnt show my potential but needed a grade.",
      src: "https://via.placeholder.com/350",
    },
    {
      title: "fantasy-bet-football",
      desc:
        "My final year project which doesnt show my potential but needed a grade.",
      src: "https://via.placeholder.com/350",
    },
  ];
  return (
    <Layout>
      {projects.map((project, i) => (
        <ProjectCard project={project} right={i % 2 === 0} />
      ))}
    </Layout>
  );
}
