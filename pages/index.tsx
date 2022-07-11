import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Builder</title>
				<meta name="description" content="Reshaping the future of cities" />
				<link rel="icon" href="" />
			</Head>

			<main className="">
				<Header />
			</main>

			<footer className=""></footer>
		</div>
	);
};

export default Home;
