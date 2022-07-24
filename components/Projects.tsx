import React from "react";
import type { NextPage } from "next";
import ProjectCard from "./ProjectCard";
import project0 from "../public/project0.jpg";

const Projects: NextPage = () => {
	return (
		<div className="z-10 relative">
			<p className="title">Loyihalar</p>
			<h1 className="text-4xl font-bold px-4 dark:text-zinc-300">
				Loremum ip lor sitwe amet elit
			</h1>

			<ProjectCard image={project0} />

			<p className="title">Loyihalar</p>
			<h1 className="text-4xl font-bold px-4 dark:text-zinc-300">
				Loremum ip lor sitwe amet elit
			</h1>
			<p className="title">Loyihalar</p>
			<h1 className="text-4xl font-bold px-4 dark:text-zinc-300">
				Loremum ip lor sitwe amet elit
			</h1>
			<p className="title">Loyihalar</p>
			<h1 className="text-4xl font-bold px-4 dark:text-zinc-300">
				Loremum ip lor sitwe amet elit
			</h1>
			<p className="title">Loyihalar</p>
			<h1 className="text-4xl font-bold px-4 dark:text-zinc-300">
				Loremum ip lor sitwe amet elit
			</h1>
			<p className="title">Loyihalar</p>
			<h1 className="text-4xl font-bold px-4 dark:text-zinc-300">
				Loremum ip lor sitwe amet elit
			</h1>
		</div>
	);
};

export default Projects;
