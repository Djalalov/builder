import React from "react";
import Image from "next/image";

const ProjectCard = ({ image }) => {
	return (
		<div className="flex rounded-xl h-18 px-2 py-2 mx-4 my-2 bg-[#292C35] dark:bg-secondary/5">
			<Image src={image} alt="Project 1" width={500} height={500} />
		</div>
	);
};

export default ProjectCard;
