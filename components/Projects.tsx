import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import BG from "../public/BG.png";

import ProjectCard from "./ProjectCard";
import project0 from "../public/project0.jpg";
import project4 from "../public/project4.jpg";
import project7 from "../public/project7.jpg";
import project3 from "../public/project3.jpg";
import project8 from "../public/project8.jpg";

const Projects: NextPage = () => {
	return (
		<div className="z-10 relative">
			<p className="title">Loyihalar</p>
			<h1 className="text-4xl font-bold px-4 mb-8 dark:text-zinc-300">
				Loremum ip lor sitwe amet elit
			</h1>
			{/* Data Manually inserted for now */}
			<Image
				src={BG}
				alt="Picture of the author"
				quality="100"
				layout="fill"
				className="invisible dark:visible translate-y-64 dark:rounded-t-full"
			/>
			<div className="z-20">
				<ProjectCard
					image={project0}
					title="Sulton Ahmet restaran"
					location="Andijon"
					metrics="40 x 25 m"
					duration="3 oy"
				/>
				<ProjectCard
					image={project4}
					title="Asaka Textil Korhonasi"
					location="Asaka"
					metrics="150 x 85 m"
					duration="7 oy"
				/>
				<ProjectCard
					image={project7}
					title="Mehmon xona"
					location="Andijon"
					metrics="20 x 8 m"
					duration="1 oy"
				/>
				<ProjectCard
					image={project3}
					title="Ali Baba restaran"
					location="Andijon"
					metrics="35 x 20 m"
					duration="3 oy"
				/>
				<ProjectCard
					image={project8}
					title="Mehmon kutish zali"
					location="Andijon"
					metrics="35 x 20 m"
					duration="3 oy"
				/>
			</div>
		</div>
	);
};

export default Projects;
