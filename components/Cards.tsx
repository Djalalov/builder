import React from "react";
import { IoEyeOutline } from "react-icons/io5";
import { ImCircleDown, ImCircleUp } from "react-icons/im";
import Link from "next/link";

type data = {
	id: number;
	title: string;
	info: string;
	stat: number;
};

const data = [
	{
		id: 1,
		title: "Mahalliy hamda xalqaro mijozlar",
		info: "A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
		stat: 100,
	},
	{
		id: 2,
		title: "Dizaynerlik va qurilish loyihalar bajarildi",
		info: "The React Framework for Production",
		stat: 60,
	},
	{
		id: 3,
		title: "Yillik professional tajriba",
		info: "a visual object or experience consciously created through an expression of skill or imagination.",
		stat: 10,
	},
];

const Accordian = ({ title, info, stat }) => {
	const [open, setOpen] = React.useState<Boolean>(false);

	const handleOpen = () => setOpen(!open);
	return (
		<>
			<div
				//onClick={() => handleOpen()}
				className="flex group cursor-pointer h-18 px-2 py-2 mx-4 my-2 bg-base-100 dark:bg-[#292C35] transition-all ease-out duration-300 flex-col rounded-xl shadow-lg"
			>
				<div className="flex">
					<div className="flex-1 mr-2 space-y-2 px-2">
						<span className="font-bold text-4xl">
							{stat} <span className="text-primary text-4xl">+</span>
						</span>
						<p className=" text-gray-500 group cursor-pointer">{title} </p>
					</div>
					<div className="flex flex-col items-center justify-center ">
						<button className="group btn btn-ghost text-gray-500">
							<Link href="#projects">
								<ImCircleDown className="text-xl w-6 h-6" />
							</Link>
						</button>
					</div>
				</div>

				{/* 	<div>
					{open && (
						<div className="border-t-gray-700 dark:border-t-gray-400 text-gray-300 flex rounded-b-xl h-18 px-2 py-2 bg-[#17181D]/80 dark:bg-secondary/5 transition ease-in-out duration:1000">
							{info}
						</div>
					)}
				</div> */}
			</div>
		</>
	);
};

const Cards: React.FC = () => {
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
