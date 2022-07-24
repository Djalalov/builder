import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

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
				<Footer />
			</main>
		</>
	);
};

export default Home;
