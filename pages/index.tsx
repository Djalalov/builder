import type { NextPage } from "next";
import Head from "next/head";
import { Projects, Footer, Hero, Navbar, Services } from "../components";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Builder</title>
				<meta name="description" content="Reshaping the future of cities" />
				<link rel="icon" href="" />
			</Head>
			<main className="relative">
				<Navbar />
				<Hero />
				<Projects />
				<Services />
				<Footer />
			</main>
		</>
	);
};

export default Home;
