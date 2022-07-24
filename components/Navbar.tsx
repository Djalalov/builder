import React, { useState } from "react";
import Link from "next/link";
import SideBar from "./SideBar";
import { useRef } from "react";
import OutsideClick from "../utils/OutsideClick";
import SwapIcon from "./SwapIcon";

const Navbar = () => {
	const boxRef = useRef(null);
	const boxOutsideClick = OutsideClick(boxRef);
	const [showNav, setShowNav] = useState(false);
	return (
		<nav className="md:flex justify-between items-center dark:bg-[#17181D]/90 backdrop-blur-sm sticky top-0 z-20 h-14">
			<div className="flex items-center justify-between p-2">
				<Link href="/">
					<a className="text-center text-2xl font-bold">Builder</a>
				</Link>
				<div className="flex items-center justify-center gap-2">
					<SwapIcon />
					<label className="swap swap-rotate border-none p-2">
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
			</div>
			<div
				/* onClick={() => setShowNav(!showNav)} */
				className={`${
					showNav
						? "bg-black/30 fixed w-full h-[100vh] top-14 left-0 right-0 bottom-0 cursor-pointer"
						: ""
				}`}
			>
				<SideBar showNav={showNav} boxRef={boxRef} />
			</div>
		</nav>
	);
};

export default Navbar;
