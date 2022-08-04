import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import BG from "../public/BG.png";
import ProjectCard from "./ProjectCard";
import asaka from "../public/asaka";

/* const AsakaProjects = [
	asaka.pr1,
	asaka.pr2,
	asaka.pr3,
	asaka.pr4,
	asaka.pr5,
	asaka.pr6,
	asaka.pr7,
	asaka.pr8,
	asaka.pr9,
]; */
const Projects: React.FC = () => {
	return (
		<div className="z-10 relative">
			<p className="title super font-extrabold">Loyihalar</p>
			<h1 className="text-4xl font-bold px-4 mb-8 dark:text-zinc-300">
				Loremum ip lor sitwe amet elit
			</h1>
			{/* Data Manually inserted for now */}
			<Image
				src={BG}
				alt="Picture of the author"
				quality="100"
				layout="fill"
				className="invisible dark:visible translate-y-64 dark:rounded-full animate-pulse"
			/>
			<div className="z-20">
				<ProjectCard
					image={asaka.pr1}
					title="Sulton Ahmet restaran"
					location="Andijon"
					metrics="40 x 25 m"
					duration="3 oy"
				/>
				{/* <ProjectCard
					image={""}
					title="Asaka Textil Korhonasi"
					location="Asaka"
					metrics="150 x 85 m"
					duration="7 oy"
				/>
				<ProjectCard
					image={""}
					title="Asaka Textil	Ofis"
					location="Asaka"
					metrics="15 x 8 m"
					duration="1.5 oy"
				/>
				<ProjectCard
					image={""}
					title="Ali Baba restaran"
					location="Andijon"
					metrics="35 x 20 m"
					duration="3 oy"
				/>
				<ProjectCard
					image={""}
					title="Mehmon kutish zali"
					location="Andijon"
					metrics="35 x 20 m"
					duration="3 oy"
				/> */}
			</div>
		</div>
	);
};

export default Projects;
