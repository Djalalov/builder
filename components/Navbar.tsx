import React, { useState } from "react";
import Link from "next/link";
import { HiOutlineMenuAlt2, HiOutlineMenuAlt3 } from "react-icons/hi";
import NavItems from "./NavItems";

const Navbar = () => {
	const [showNav, setShowNav] = useState(false);
	return (
		<nav className="md:flex justify-between items-center dark:bg-[#292C35]/70 backdrop-blur-lg sticky top-0 z-20">
			<div className="flex items-center justify-between">
				<Link href="/">
					<a className="text-center text-2xl">Builder</a>
				</Link>
				<label className="btn btn-circle swap swap-rotate border-none">
					<input type="checkbox" onChange={() => setShowNav(!showNav)} />

					<svg
						className="swap-off fill-current"
						xmlns="http://www.w3.org/2000/svg"
						width="28"
						height="28"
						viewBox="0 0 512 512"
					>
						<path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
					</svg>

					<svg
						className="swap-on fill-current"
						xmlns="http://www.w3.org/2000/svg"
						width="28"
						height="28"
						viewBox="0 0 512 512"
					>
						<polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
					</svg>
				</label>
			</div>

			<div
				className={` ${
					showNav ? "left-0 " : "-left-full"
				}  fixed bottom-0 top-12 items-center bg-gray-500 w-3/6  text-white space-y-5 p-2 transition-left ease-in-out h-96 duration-300`}
			>
				<NavItems />
			</div>
		</nav>
	);
};

export default Navbar;
