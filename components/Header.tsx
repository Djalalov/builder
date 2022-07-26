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
		<div className="drawer backdrop-blur-lg ">
			<input id="my-drawer-3" type="checkbox" className="drawer-toggle " />
			<div className="drawer-content z-40">
				{/*Navbar*/}
				<div className="w-full sticky z-50 top-0 xl:container xl:mx-auto navbar dark:bg-[#292C35]/70 backdrop-blur-xl">
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
				</div>
				<Hero />
			</div>

			<div className="drawer-side "></div>
		</div>
	);
};

export default Header;
