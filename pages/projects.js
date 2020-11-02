import React from "react";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "eMenu - contactless menus",
      desc:
        "My final year project I did a while back using EJS and MongoDB Atlas, In process of improving further",
      src: "images/portfolio-1.png",
    },
    {
      title: "fantasy-bet-football",
      desc: "Hobby project started because fit my friends and my requirements",
      src: "images/portfolio-2.png",
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
