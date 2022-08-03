import React, { ReactNode } from "react";
import Image from "next/image";
import { ImLocation2, ImClock } from "react-icons/im";
import { FaRulerCombined } from "react-icons/fa";
import { BsBuilding } from "react-icons/bs";
import Button from "./Button";

interface Props {
	image: any;
	title: string;
	location: string;
	metrics: string;
	duration: string;
}

const ProjectCard: React.FC<Props> = props => {
	/* const [showModal, setShowModal] = React.useState<Boolean>(false);

	function getCheckBox() {
		const modal = document.getElementById(
			"checkBox"
		) as HTMLInputElement | null;
		modal.checked = false;
		console.log(modal.checked);
	} */

	return (
		<>
			<div className="card card-compact flex rounded-xl h-18 m-4 mb-8 bg-[#292C35] dark:bg-[#292C35]/40 ">
				<div className="overflow-hidden touch-auto">
					<Image
						src={props.image}
						alt="Project 1"
						width={400}
						height={300}
						quality={100}
						placeholder="blur"
						layout="responsive"
						className="scale-100 transition-all ease-in-out duration-300 hover:scale-150 md:hover:scale-125"
						/* onClick={() => getCheckBox()} */
						/* htmlFor="my-modal-3" */
					/>
				</div>

				<div className="card-body bg-white dark:text-base-100 dark:bg-transparent dark:to-[#17181D]">
					<h2 className="card-title ">
						<BsBuilding className="text-primary w-6 h-6" />
						{props.title}
					</h2>
					<div className="flex items-center justify-between my-2 flex-wrap">
						<div className="flex">
							<ImLocation2 className="w-5 h-5 s" />
							<p className="mx-2 text-base dark:text-gray-400">
								{props.location}
							</p>
						</div>
						<div className="flex">
							<FaRulerCombined className="w-5 h-5" />
							<p className="mx-2 text-base dark:text-gray-400">
								{props.metrics}
							</p>
						</div>
						<div className="flex">
							<ImClock className="w-5 h-5" />
							<p className="mx-2 text-base dark:text-gray-400">
								{props.duration}
							</p>
						</div>
					</div>
				</div>
				<div className="card-actions" /* onClick={() => getCheckBox()} */>
					<Button title="Batafsil" />
				</div>
			</div>
		</>
	);
};

export default ProjectCard;
