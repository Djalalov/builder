import React from "react";
import Image from "next/image";
import { ImLocation2, ImClock } from "react-icons/im";
import { FaRulerCombined } from "react-icons/fa";
import { BsBuilding, BsBoxArrowInRight } from "react-icons/bs";
import Button from "./Button";

const ProjectCard = ({ image, title, location, metrics, duration }) => {
	return (
		<>
			<div className="card card-compact flex rounded-xl h-18 m-4 mb-8 bg-[#292C35] dark:bg-[#292C35]/40 ">
				<figure className="overflow-hidden">
					<Image
						src={image}
						alt="Project 1"
						width={400}
						height={350}
						className="scale-100 transition-all ease-in-out duration-300 hover:scale-125"
					/>
				</figure>
				<div className="card-body shadow-glass bg-gradient-to-bl from-gray-300 to-white dark:text-base-100 dark:bg-gradient-to-tr dark:from-transparent dark:to-[#17181D]">
					<h2 className="card-title ">
						<BsBuilding className="text-primary w-6 h-6" />
						{title}
					</h2>
					<div className="flex items-center justify-between my-2">
						<div className="flex">
							<ImLocation2 className="w-5 h-5" />
							<p className="mx-2 text-base dark:text-gray-400">{location}</p>
						</div>
						<div className="flex">
							<FaRulerCombined className="w-5 h-5" />
							<p className="mx-2 text-base dark:text-gray-400">{metrics}</p>
						</div>
						<div className="flex">
							<ImClock className="w-5 h-5" />
							<p className="mx-2 text-base dark:text-gray-400">{duration}</p>
						</div>
					</div>
				</div>
				<div className="card-actions">
					<Button title="Batafsil" />
				</div>
			</div>
		</>
	);
};

export default ProjectCard;
