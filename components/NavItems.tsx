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
	{ title: "Biz haqimizda", path: "/", icon: <ImInfo /> },
	{ title: "Loyihalar", path: "/projects", icon: <BiBuildings /> },
	{ title: "Xizmatlar", path: "/services", icon: <ImClipboard /> },
	{ title: "Mijozlar", path: "/clients", icon: <IoPeopleOutline /> },
	{ title: "Aloqa", path: "/contacts", icon: <MdOutlineSms /> },
];
const NavItems = () => {
	const router = useRouter();
	return (
		<div className="menu p-4 overflow-y-auto w-60 bg-base-100/80 dark:bg-[#17181D]/90 backdrop-blur-md flex flex-col justify-between h-full">
			<div className="pt-2">
				<h1 className="text-center text-3xl mb-4">Builder</h1>
				<hr className="dark:bg-[#17181D]/90 bg-black" />
				<ul>
					{navLinks.map(link => (
						<li key={link.title}>
							<Link href={link.path} passHref>
								<span className="w-14 h-14 font-bold">{link.icon}</span>
								<a
									className={router.pathname === link.path ? "activeLink" : " "}
								>
									{link.title}
								</a>
							</Link>
						</li>
					))}
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
				<p className="px-4 text-center dark:text-gray-300">998 90 269 99 77</p>
			</div>
		</div>
	);
};

export default NavItems;
/* ////////////////////////////////////////////////////// */

{
	/* <ul className="space-y-6 pt-24">
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
</ul>; */
}
