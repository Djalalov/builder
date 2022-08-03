import React, { useState } from "react";
import Link from "next/link";
import SideBar from "./SideBar";
import SwapIcon from "./SwapIcon";
import {
	ImFacebook2,
	ImInstagram,
	ImTelegram,
	ImLinkedin,
} from "react-icons/im";

const Navbar: React.FC = () => {
	const [showNav, setShowNav] = useState<Boolean>(false);

	function getCheckBox() {
		const cb = document.getElementById("checkBox") as HTMLInputElement | null;
		cb.checked = false;
	}

	return (
		<nav className="md:flex justify-between items-center bg-[#17181D]/90 dark:bg-[#17181D]/90 backdrop-blur-sm sticky top-0 z-50 h-14">
			<div className="flex items-center justify-between p-2">
				<Link href="/">
					<a className="text-center text-2xl font-bold px-2 text-base-100">
						Builder Group
					</a>
				</Link>
				<div className="flex items-center justify-center gap-2 ">
					<SwapIcon />

					<label className="swap swap-rotate border-none p-2 text-base-100 md:hidden">
						<input
							type="checkbox"
							id="checkBox"
							onChange={() => setShowNav(!showNav)}
						/>
						<svg
							className="swap-off fill-current "
							xmlns="http://www.w3.org/2000/svg"
							width="28"
							height="28"
							viewBox="0 0 512 512"
						>
							<path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
						</svg>
						<svg
							className="swap-on fill-current "
							xmlns="http://www.w3.org/2000/svg"
							width="28"
							height="28"
							viewBox="0 0 512 512"
						>
							<polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
						</svg>
					</label>
				</div>
			</div>
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
				<ImFacebook2 className="hidden md:flex text-2xl text-base-100 dark:text-primary" />
				<ImInstagram className="hidden md:flex text-2xl text-base-100 dark:text-primary" />
				<ImTelegram className=" hidden md:flex text-2xl text-base-100 dark:text-primary" />
				<ImLinkedin className="hidden md:flex text-2xl text-base-100 dark:text-primary" />
			</div>
			<div
				onClick={() => {
					setShowNav(!showNav);
					getCheckBox();
				}}
				className={`${
					showNav
						? "bg-black/30 fixed w-full h-[100vh] top-14 left-0 right-0 bottom-0 cursor-pointer z-10"
						: ""
				}`}
			>
				<SideBar showNav={showNav} />
			</div>
		</nav>
	);
};

export default Navbar;
