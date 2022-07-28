import React from "react";
import { IoEyeOutline } from "react-icons/io5";
import { ImCircleDown, ImCircleUp } from "react-icons/im";

type data = {
	id: number;
	title: string;
	info: string;
	stat: number;
};

const data = [
	{
		id: 1,
		title: "Dizaynerlik va qurilish loyihalar bajarildi",
		info: "The React Framework for Production",
		stat: 60,
	},
	{
		id: 2,
		title: "Mahalliy hamda xalqaro mijozlar",
		info: "A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
		stat: 100,
	},
	{
		id: 3,
		title: "Yillik professional tajriba",
		info: "a visual object or experience consciously created through an expression of skill or imagination.",
		stat: 10,
	},
];

const Accordian = ({ title, info, stat }) => {
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => setOpen(!open);
	return (
		<>
			<div
				onClick={() => handleOpen()}
				className="flex group cursor-pointer h-18 px-2 py-2 mx-4 my-2 bg-[#292C35] dark:bg-secondary/5 transition-all ease-out duration-300 flex-col rounded-xl"
			>
				<div className="flex">
					<div className="flex-1 mr-2 space-y-2 p-2">
						<span className="font-bold text-4xl text-white">
							{stat} <span className="text-primary text-4xl">+</span>
						</span>
						<p className="pt-2 text-gray-200 group cursor-pointer">{title} </p>
					</div>
					<div className="flex flex-col items-center mt-2">
						<button className="btn btn-ghost">
							<IoEyeOutline className="text-2xl text-zinc-400" />
						</button>
						<button className="group btn btn-ghost text-gray-400">
							{open ? (
								<ImCircleUp className="text-xl w-6 h-6" />
							) : (
								<ImCircleDown className="text-xl w-6 h-6" />
							)}
						</button>
					</div>
				</div>

				<div>
					{open && (
						<div className="border-t-gray-700 dark:border-t-gray-400 text-gray-300 flex rounded-b-xl h-18 px-2 py-2 bg-[#292C35] dark:bg-secondary/5">
							{info}
						</div>
					)}
				</div>
			</div>
		</>
	);
};

const Cards = () => {
	return (
		<div>
			{data.map(data => {
				return (
					<Accordian
						key={data.id}
						title={data.title}
						info={data.info}
						stat={data.stat}
					/>
				);
			})}
		</div>
	);
};

export default Cards;
