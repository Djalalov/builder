import React from "react";
import type { NextPage } from "next";
import ProjectCard from "./ProjectCard";
import project0 from "../public/project0.jpg";
import project1 from "../public/project1.jpg";
import project2 from "../public/project2.jpg";
import project3 from "../public/project3.jpg";

const Projects: NextPage = () => {
	return (
		<div className="z-10 relative">
			<p className="title">Loyihalar</p>
			<h1 className="text-4xl font-bold px-4 dark:text-zinc-300">
				Loremum ip lor sitwe amet elit
			</h1>

			<ProjectCard image={project0} />
			<ProjectCard image={project1} />
			<ProjectCard image={project2} />
			<ProjectCard image={project3} />
		</div>
	);
};

export default Projects;
