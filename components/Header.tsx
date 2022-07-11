import React from "react";
import Hero from "./Hero";
import SwapIcon from "./SwapIcon";
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

const Header = () => {
	return (
		<div className="drawer dark:bg-[#292C35] backdrop-blur-sm">
			<input id="my-drawer-3" type="checkbox" className="drawer-toggle " />
			<div className="drawer-content flex flex-col backdrop-blur-sm">
				{/*Navbar*/}
				<div className="w-full sticky top-0 xl:container xl:mx-auto navbar dark:bg-[#292C35] backdrop-blur-sm">
					<div className="flex-none lg:hidden">
						<label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								className="inline-block w-7 h-7 stroke-current"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16M4 18h16"
								></path>
							</svg>
						</label>
					</div>
					<div className="flex navbar-start mx-2 text-2xl">Builder</div>
					<div className="flex-none navbar-center hidden lg:block ">
						<ul className="menu menu-horizontal">
							<li>
								<a>Navbar Item 1</a>
							</li>
							<li>
								<a>Navbar Item 2</a>
							</li>
							<li>
								<a>Navbar Item 2</a>
							</li>
						</ul>
					</div>
					<div className="navbar-end px-2 flex gap-6">
						<SwapIcon /> <span className="hidden">|</span>
						<ImFacebook2 className="hidden text-3xl" />
						<ImInstagram className="hidden text-3xl" />
						<ImTelegram className=" hidden text-3xl" />
						<ImLinkedin className="hidden text-3xl" />
					</div>
				</div>
				<Hero />
			</div>
			<div className="drawer-side">
				<label htmlFor="my-drawer-3" className="drawer-overlay "></label>
				<div className="menu p-4 overflow-y-auto w-60 bg-base-100/80 dark:bg-black/80 backdrop-blur-sm flex flex-col justify-between">
					<div className="pt-2">
						<h1 className="text-center text-3xl mb-4">Builder</h1>
						<hr className="bg-black" />
						<ul className="space-y-8 pt-24">
							<li className="flex flex-row">
								<ImInfo className="w-14 h-14 font-bold" />
								<a className="font-semibold">Biz haqimizda</a>
							</li>
							<li className="flex flex-row">
								<ImClipboard className="w-14 h-14 font-bold" />
								<a className="font-semibold">Xizmatlar</a>
							</li>
							<li className="flex flex-row">
								<BiBuildings className="w-14 h-14 " />
								<a className="font-semibold">Loyihalar</a>
							</li>
							<li className="flex flex-row">
								<IoPeopleOutline className="w-14 h-14" />
								<a className="font-semibold">Mijozlar</a>
							</li>
							<li className="flex flex-row">
								<MdOutlineSms className="w-14 h-14" />
								<a className="font-semibold">Aloqa</a>
							</li>
						</ul>
					</div>
					<div className="pb-2 px-4 flex-col">
						<div className="flex gap-6 darl:text-gray-300">
							<ImFacebook2 className="text-2xl" />
							<ImInstagram className="text-2xl" />
							<ImTelegram className="text-2xl" />
							<ImLinkedin className="text-2xl" />
						</div>
						<p className="w-full px-4 pt-4  text-center dark:text-gray-300">
							Andijon, Uzbekistan
						</p>
						<p className="px-4 text-center dark:text-gray-300">
							998 90 269 99 77
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
