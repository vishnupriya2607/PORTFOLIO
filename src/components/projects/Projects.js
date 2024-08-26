import React from 'react';
import Title from '../layouts/Title';
import { log1, lo1, img1, bus, log, tic } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Country-Module"
          des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={lo1}
          githubLink="https://github.com/vishnupriya2607/country_module"
        />
        <ProjectsCard
          title="Placement-Pro"
          des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={log1}
          githubLink="https://github.com/vishnupriya2607/placement-project"
        />
        <ProjectsCard
          title="Bus Ticket Reservation"
          des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={tic}
          githubLink="https://github.com/vishnupriya2607/busticket-reservation"
        />
        <ProjectsCard
          title="Event Management"
          des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={img1}
          githubLink="https://github.com/your-github-repo-https://github.com/vishnupriya2607/event-Management-project"
        />
        <ProjectsCard
          title="Busfees Management System"
          des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={bus}
          githubLink="https://github.com/vishnupriya2607/busticket-reservation"
        />
        <ProjectsCard
          title="Calculator"
          des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={log}
          githubLink="https://github.com/vishnupriya2607/calculator"
        />
      </div>
    </section>
  );
}

export default Projects;
