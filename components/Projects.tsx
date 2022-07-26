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
			<h1 className="text-4xl font-bold px-4 mb-8 dark:text-zinc-300">
				Loremum ip lor sitwe amet elit
			</h1>
			{/* Manually inserted for now */}
			<ProjectCard
				image={project0}
				title="Sulton Ahmet"
				location="Andijon"
				metrics="40 x 25 m"
				duration="3 oy"
			/>
			<ProjectCard
				image={project1}
				title="Asaka Mall"
				location="Asaka"
				metrics="150 x 85 m"
				duration="7 oy"
			/>
			<ProjectCard
				image={project2}
				title="Sulton Ahmet"
				location="Andijon"
				metrics="40 x 25 m"
				duration="5 oy"
			/>
			<ProjectCard
				image={project3}
				title="Sulton Ahmet"
				location="Andijon"
				metrics="40 x 25 m"
				duration="3 oy"
			/>
		</div>
	);
};

export default Projects;
