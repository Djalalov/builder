import React from "react";
import { IoEyeOutline } from "react-icons/io5";
import { ImInfo } from "react-icons/im";
import { ImCircleDown } from "react-icons/im";

const Card = ({ stat, description }) => {
	return (
		<div className="flex rounded-xl h-18 px-2 py-2 mx-4 my-2 bg-[#292C35] dark:bg-secondary/5">
			<div className="flex-1 mr-2 space-y-2">
				<span className="font-bold text-4xl text-white">
					{stat} <span className="text-primary text-4xl">+</span>
				</span>
				<p className="pt-2 text-gray-400">{description} </p>
			</div>
			<div className="flex flex-col items-center mt-2">
				<button className="btn btn-ghost">
					<IoEyeOutline className="text-2xl text-zinc-400" />
				</button>
				<button className="btn btn-ghost text-gray-400">
					<ImCircleDown className="text-xl w-6 h-6" />
				</button>
			</div>
		</div>
	);
};

export default Card;
