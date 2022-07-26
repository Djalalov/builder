import React from "react";
import Image from "next/image";
import { ImLocation2, ImClock } from "react-icons/im";
import { FaRulerCombined } from "react-icons/fa";
import { BsBuilding } from "react-icons/bs";

const ProjectCard = ({ image }) => {
	return (
		<>
			<div className="card card-compact flex rounded-xl h-18 m-4 mb-8 bg-[#292C35] dark:bg-secondary/5 shadow-xl text-white">
				<figure>
					<Image src={image} alt="Project 1" width={400} height={350} />{" "}
				</figure>
				<div className="card-body  ">
					<h2 className="card-title ">
						<BsBuilding className="text-primary w-6 h-6" />
						&quot;Sultan Ahmet&quot; restaran
					</h2>
					<div className="flex items-center justify-between my-4">
						<div className="flex">
							<ImLocation2 className="w-5 h-5" />
							<p className="mx-2 text-base text-gray-400">Andijon</p>
						</div>
						<div className="flex">
							<FaRulerCombined className="w-5 h-5" />
							<p className="mx-2 text-base text-gray-400">40 x 65 m</p>
						</div>
						<div className="flex">
							<ImClock className="w-5 h-5" />
							<p className="mx-2 text-base text-gray-400">3 oy</p>
						</div>
					</div>

					<div className="card-actions justify-end">
						<button className="buttonStyle2">Batafsil</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProjectCard;
