import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { title } from "process";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Builder</title>
				<meta name="description" content="Reshaping the future of cities" />
				<link rel="icon" href="" />
			</Head>

			<main className="bg-slate-200 dark:bg-zinc-700 h-96 dark:text-gray-100 text-gray-900">
				<Navbar />
			</main>

			<footer className=""></footer>
		</div>
	);
};

export default Home;
