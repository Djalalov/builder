import React from "react";
import Image from "next/image";

const ProjectCard = ({ image }) => {
	return (
		<>
			<div className="card card-compact flex rounded-xl h-18 m-4 bg-[#292C35] dark:bg-secondary/5 shadow-xl text-white">
				<figure>
					<Image src={image} alt="Project 1" width={500} height={500} />{" "}
				</figure>
				<div className="card-body">
					<h2 className="card-title ">Shoes!</h2>
					<p>If a dog chews shoes whose shoes does he choose?</p>
					<div className="card-actions justify-end">
						<button className="buttonStyle">Batafsil</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProjectCard;
