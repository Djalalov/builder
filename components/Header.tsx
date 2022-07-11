import React from "react";
import SwapIcon from "./SwapIcon";

const Header = () => {
	return (
		<div className="drawer dark:bg-[#292C35]">
			<input id="my-drawer-3" type="checkbox" className="drawer-toggle " />
			<div className="drawer-content flex flex-col ">
				{/*Navbar*/}
				<div className="w-full navbar bg-base-300 dark:bg-[#292C35]">
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
					<div className="flex-1 mx-2 text-2xl">Builder</div>
					<div className="flex-none hidden lg:block">
						<ul className="menu menu-horizontal">
							<li>
								<a>Navbar Item 1</a>
							</li>
							<li>
								<a>Navbar Item 2</a>
							</li>
						</ul>
					</div>
					<div className="navbar-end px-2">
						<SwapIcon />
					</div>
				</div>
				<div className="">
					<h1 className="text-6xl font-bold pt-8 px-4">
						Loremum ip lor sitwe amet elit
					</h1>
					<p className="font-bold pt-8 px-4">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
						cuebitis ad velit nostrum tempore? Dignissimos earum delectus atque.
					</p>
				</div>
			</div>
			<div className="drawer-side">
				<label htmlFor="my-drawer-3" className="drawer-overlay"></label>
				<ul className="menu p-4 overflow-y-auto w-60 bg-base-100 dark:bg-[#292C35]">
					<li>
						<a>Sidebar Item 1</a>
					</li>
					<li>
						<a>Sidebar Item 2</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
