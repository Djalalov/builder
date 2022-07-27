import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import {
	ImFacebook2,
	ImInstagram,
	ImTelegram,
	ImLinkedin,
	ImInfo,
	ImClipboard,
} from "react-icons/im";
import { BiBuildings } from "react-icons/bi";
import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineSms } from "react-icons/md";

const navLinks = [
	{
		title: "Biz haqimizda",
		path: "/",
		icon: <ImInfo className="w-8 h-8 pl-2" />,
	},
	{
		title: "Loyihalar",
		path: "/projects",
		icon: <BiBuildings className="w-8 h-8 pl-2" />,
	},
	{
		title: "Xizmatlar",
		path: "/services",
		icon: <ImClipboard className="w-8 h-8 pl-2" />,
	},
	{
		title: "Mijozlar",
		path: "/clients",
		icon: <IoPeopleOutline className="w-8 h-8 pl-2" />,
	},
	{
		title: "Aloqa",
		path: "/contacts",
		icon: <MdOutlineSms className="w-8 h-8 pl-2" />,
	},
];

const SideBar = ({ showNav }) => {
	const router = useRouter();

	return (
		<div
			className={` ${
				showNav ? "left-0 " : "-left-full"
			}  fixed bottom-0 top-0 items-center w-52 menu z-20 overflow-y-auto bg-base-100/90 dark:bg-[#17181D]/95 backdrop flex flex-col justify-between transition-left ease-in-out duration-300 h-screen`}
		>
			<div className="font-semibold text-[26px] bg-primary/80 w-full h-20 flex items-center justify-center">
				<h1>Builder Group</h1>
			</div>

			<div className="flex flex-col items-center justify-center ">
				<ul className="space-y-6">
					{navLinks.map(link => (
						<li className="flex flex-row font-semibold" key={link.title}>
							<span className="p-2 font-bold ">{link.icon}</span>
							<Link href={link.path} passHref>
								<a
									className={
										router.pathname === link.path ? "activeLink pr-4" : " "
									}
								>
									{link.title}
								</a>
							</Link>
						</li>
					))}
				</ul>
			</div>

			<div className="flex-col pt-6 border-t-2 dark:border-gray-300 bg-base-100/80 dark:bg-inherit w-full h-32">
				<div className="flex items-center justify-center gap-4 darl:text-gray-300">
					<ImFacebook2 className="text-2xl" />
					<ImInstagram className="text-2xl" />
					<ImTelegram className="text-2xl" />
					<ImLinkedin className="text-2xl" />
				</div>
				<p className="w-full px-4 pt-4  text-center dark:text-gray-300">
					Andijon, Uzbekistan
				</p>
				<p className="px-4 text-center dark:text-gray-300">998 90 269 99 77</p>
			</div>
		</div>
	);
};

export default SideBar;
