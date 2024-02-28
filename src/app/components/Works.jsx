import React from "react";
import { projects } from "../../constants/index";
import ProjectCard from "./ProjectCard";

const Works = () => {
  return (
    <section
      id="works"
      className={`flex flex-col h-screen transition-all duration-500 transform py-20 px-24 w-full`}
    >
      <div>
        <h1 className="text-7xl lg:text-left text-center w-full">Works</h1>
      </div>
      <div>
        <span>
          Discover here my recent work ! Here is a showcase of my favourite
          projects.
        </span>
      </div>
      <div className="flex flex-wrap justify-between gap-16 mt-14 w-full">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Works;
