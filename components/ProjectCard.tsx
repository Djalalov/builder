import React from "react";
import Image from "next/image";

const ProjectCard = ({ image }) => {
	return (
		<>
			<div className="card card-compact flex rounded-xl h-18 mx-4 my-2 bg-[#292C35] dark:bg-secondary/5 shadow-xl">
				<figure>
					<Image src={image} alt="Project 1" width={500} height={500} />{" "}
				</figure>
				<div className="card-body">
					<h2 className="card-title">Shoes!</h2>
					<p>If a dog chews shoes whose shoes does he choose?</p>
					<div className="card-actions justify-end">
						<button className="btn btn-primary">Buy Now</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProjectCard;
